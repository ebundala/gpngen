import { AppLogger } from '@mechsoft/app-logger';
import { FirebaseService } from '@mechsoft/firebase-admin';
import { MailService } from '@mechsoft/mailer';
import { PrismaClient } from '@mechsoft/prisma-client';
import { HttpService, Injectable } from '@nestjs/common';
import { GraphQLError } from 'graphql';
import {
  canCreateOnlyOneOrganization, isUserSensitiveInfo,
  onlyConnectActiveOffers, onlyConnectOwnerSelf,
  onlyConsumerCanCompleteOrder,
  onlyOwnerOrProviderOrManagerCanUpdateOrder,
  onlyOwnerhasAccess,
  onlyProviderAndManagerCanProcessOrder,
  onlyServiceOfferedByOrg,
  onlyConsumerWithCompletedOrRejectedOrderCanRateOrganization,
  onlyOneRatingPerConsumerOrganizationPair,
  onlyOwnerOfRecordAllowed
} from '../../business-rules/rules.definitions';
import { isEmail, isLength } from 'validator';
import {
  AuthInput,
  AuthResult,
  OrganizationCreateWithoutOwnerInput,
  Role,
  SignOutResult,
  State,
  User,

} from '../../models/graphql';
import { uploadFile } from '../directives/file.utils';
import { Prisma } from '@prisma/client'
import { BusinessRequest, BusinessRulesManager } from '../../business-rules/business-rules-manager.service';
import { BlocValidate } from '../../business-rules/bloc-validation.decorator';
import { BlocAttach } from 'src/business-rules/bloc-hook.decorator';
import { Bloc } from 'src/business-rules/busines-rules-container.decorator';
import { TenantContext } from '@mechsoft/common';
@Injectable()
  @Bloc()
export class AuthService {
  constructor(
    private readonly firebaseApp: FirebaseService,
    private readonly httpService: HttpService,
    private readonly logger: AppLogger,
    private readonly mail: MailService,
  ) {
    this.httpService.axiosRef.defaults.baseURL = this.firebaseApp.signInWithProviderHost;
    this.httpService.axiosRef.defaults.headers.post['Content-Type'] = 'application/json';
    this.logger.setContext(AuthService.name);
  }
  // @BlocAttach('signup.input.credentials.avator')
  // async avator(args, next) {
  //   debugger
  //   return next(args)
  // }

  // @BlocValidate('signup.input.credentials.avator')
  // async avatorRule(args) {
  //   debugger
  //   return { rules: [], facts: { test: true } }
  // }
  @BlocValidate('updateOneRating')
  async updateOneRatingBloc(v: BusinessRequest) {
    const { args, rules, allow, context } = v;
      const { where, select } = args;
    const { prisma, auth, logger } = context;
    const rating = await prisma.runAsRoot(() =>
      prisma.rating.findUnique({
        where: { id: where.id },
        select: {
          owner: {
            select: { id: true }
          }
        }
      }));

    const ownerRule = onlyOwnerOfRecordAllowed(auth.uid)
    return { rules: [ownerRule], facts: rating }
  }

  @BlocValidate('findUniqueUser')
  async findUniqueUserBloc(v: BusinessRequest) {
    const { args, rules, allow, context } = v;
      const { where, select } = args;
    const { prisma, auth, logger } = context;
    const facts = { ...select, ...auth };
    return { rules: [isUserSensitiveInfo(where.id)], facts }
  }
  @BlocValidate('updateOneUser')
  async updateOneUserBloc(v: BusinessRequest) {
    const { args, rules, allow, context } = v;
    const { where, select } = args;
    const { prisma, auth, logger } = context;
    return { rules: [onlyOwnerhasAccess(where.id)], facts: auth }
  }

  @BlocValidate('createOneOrganization')
  async createOneOrganizationBloc(v: BusinessRequest) {
    const { args, rules, allow, context } = v;
    const { where, data, select } = args;
    const { prisma, auth, logger } = context;
    const user = await prisma.runAsRoot(() => prisma.user.findUnique({ where: { id: auth.uid }, include: { organizations: true } }))
    const serviceCategories = (await prisma
      .runAsRoot(() => prisma.serviceCategory.findMany({
        where: { state: State.APPROVED },
        select: { id: true }
      }))).map((v) => v.id);
    const facts = { ...user, ...data, /*offers: { connect: { id: data?.offers?.connect[0]?.id } }*/ }
    return {
      rules: [
      onlyConnectOwnerSelf(auth.uid),
      onlyConnectActiveOffers(serviceCategories),
      canCreateOnlyOneOrganization()],
      facts
    };

  }

  @BlocValidate('createOneOrder')
  async createOneOrderBloc(v: BusinessRequest) {
    const { args, rules, allow, context } = v;
    const { where, data, select } = args;
    const { prisma, auth, logger } = context;
    debugger
    const service = await prisma.runAsRoot(() => prisma.service.findFirst({
      where: {
        id: data?.service?.connect?.id,
        AND: {
          state: State.APPROVED
        }
      },
      select: { id: true, state: true, organization: { select: { id: true,/* state:true */ } } }
    }));

    return {
      rules: [
      onlyConnectOwnerSelf(auth.uid),
      onlyServiceOfferedByOrg(service?.id, service?.organization?.id)
      ], facts: data
    }
  }

  @BlocValidate('updateOneOrder')
  async updateOneOrderBloc(v: BusinessRequest) {
    const { args, rules, allow, context } = v;
    const { where, data, select } = args;
    const { prisma, auth, logger } = context;

    const order = await prisma.runAsRoot(() => prisma.order.findUnique({
      where: {
        id: where?.id,
      },
      select: {
        id: true,
        state: true,
        owner: {
          select: {
            id: true
          }
        },
        organization: {
          select: {
            id: true,
            staffs: {
              select: { id: true }
            },
            owner: {
              select: {
                id: true
              }
            }
          }
        }
      }
    }));
    //TODO prevent updating quantity for approved orders
    //TODO add a concept of service provider based on services for organization 
    const facts = { ...auth, state: data?.state?.set };
    return {
      rules: [
      onlyOwnerOrProviderOrManagerCanUpdateOrder(
        order?.owner?.id,
        order?.organization?.owner?.id,
        order?.organization?.staffs?.map((v) => v.id)),
      onlyProviderAndManagerCanProcessOrder(order?.owner?.id),
      onlyConsumerCanCompleteOrder(order?.owner?.id)
      ], facts
    };

  }

  @BlocValidate('createOneRating')
  async createOneRatingBloc(v: BusinessRequest) {
    const { args, rules, allow, context } = v;
    const { where, data, select } = args;
    const { prisma, auth, logger } = context;

    const { orders, ratings } = (await prisma.runAsRoot(() =>
      prisma.user.findUnique({
        where: {
          id: auth.uid,
        },
        select: {
          id: true,
          ratings: {
            where: {
              organizationId: data?.organization?.connect?.id,
              AND: {
                ownerId: auth.uid
              }
            },
            select: {
              id: true
            }
          },
          orders: {
            where: {
              organization: {
                id: data?.organization?.connect?.id
              },
              AND: {
                OR: [
                  { state: State.REJECTED },
                  { state: State.COMPLETED }
                ]
              }

            },
            select: { id: true, state: true }
          }
        }
      }))) ?? {};

    const ordersRule = onlyConsumerWithCompletedOrRejectedOrderCanRateOrganization()
    const connectSelf = onlyConnectOwnerSelf(auth.uid);
    const onlyOneRating = onlyOneRatingPerConsumerOrganizationPair();
    const facts = { owner: data?.owner, orders: orders ?? [], ratings: ratings ?? [] };
    return { rules: [connectSelf, ordersRule, onlyOneRating], facts };
  }

  async signup(credentials: AuthInput, prisma: PrismaClient, select, organization: OrganizationCreateWithoutOwnerInput = null): Promise<AuthResult> {

    const res = await this.signupWithEmail(credentials, prisma, select, organization);
    if (!res?.error) {
      const link = await this.firebaseApp.admin.auth().generateEmailVerificationLink(credentials.email);
      await this.mail.sendWelcomeEmail(res.user, link).catch((e) => { this.logger.debug(e) });
    }
    return res;
  }

  signOut(token: string): Promise<SignOutResult> {
    return this.destroySessionToken(token);
  }

  async recoverAccount(email: string, prisma: PrismaClient): Promise<AuthResult> {
    const user = await prisma.user.findUnique({ where: { email: email } })
    if (!user) return {
      error: true,
      message: "User account not found"
    };
    const link = await this.firebaseApp.admin.auth().generatePasswordResetLink(email);
    await this.mail.sendPasswordResetLink(user, link).catch((e) => { this.logger.debug(e) });
    return {
      message: 'Password resset instructions sent',
      error: false,
    }
  }

  async signupWithEmail(data: AuthInput,
    prisma: PrismaClient, select,
      organization: OrganizationCreateWithoutOwnerInput = null): Promise<AuthResult> {
    const { email, password, displayName, phoneNumber, avator } = data;
    let user;
    debugger
    try {
      if (!isEmail(email)) {
        throw new GraphQLError('Invalid Email');
      } else if (!isLength(password, 6)) {
        throw new GraphQLError('Password must be atleast 6 characters long');
      } else if (!isLength(displayName, 3)) {
        throw new GraphQLError('Username must be 3 characters or more');
      }

      const users = prisma.user;
      const exist = await prisma.runAsRoot(() => {
        return users.findUnique({ where: { email } })
      })

      if (exist && exist.id) {
        throw new GraphQLError('The email address is already in use by another account');
      }
      try {

        user = await this._createUserWithEmail(
          email,
          password,
          displayName,
          phoneNumber,
        ).catch((e) => {
          throw new GraphQLError(e?.message ?? "Unknown error occurred")
        });
        const data: Prisma.UserCreateInput = {
        id: user.uid,
        displayName: user.displayName,
          phoneNumber,
        disabled: user.disabled,
        email: user.email,
        emailVerified: user.emailVerified,
        role: Role.CONSUMER,
        }
        if (avator) {
          const avatorData = await uploadFile(avator);
          data.avator = { create: avatorData }
        }

        if (organization && organization.name) {
          data.role = Role.MANAGER;
          const file = organization.logo.create.path;
          const fileData = await uploadFile(file);
          organization.logo.create = fileData;
          
          data.organizations = { create: [organization] as any[] }
        }
        const u2 = await prisma.runAsRoot(() => prisma.user.create({
          data
        }));

        const setClaims = await this._setUserClaims(u2.id, u2.role);
        const u3 = await prisma.runAs(u2, () => prisma.user.findUnique({ where: { id: u2.id }, select })) as User;
        return {
          error: false,
          user: u3,
          message: "Thank you for registering\n you will receive a confimation email when your account is ready",
        }
      } catch ({ message }) {
        //debugger;
        if (user && user.uid && !await this.cleanUpOnSignUpFailure(user.uid, prisma)) {

          throw new GraphQLError(`Failed to cleanup user signup errors\n ${message}`)
        };

      }
    } catch ({ message }) {
      debugger

      throw new GraphQLError(message)
    }


  }

  private async cleanUpOnSignUpFailure(uid: string, prisma: PrismaClient) {
    debugger
    const remove1 = await this.firebaseApp.admin
      .auth()
      .deleteUser(uid)
      .then(() => true)
      .catch(() => false);
    const remove2 = await prisma.runAsRoot(() => prisma.user
      .delete({ where: { id: uid } }))
      .then(() => true)
      .catch(() => false);
    return remove1 || remove2;
  }

  async signInWithEmail(credentials: Partial<AuthInput>, prisma: PrismaClient, select) {
    try {
      const { email, password } = credentials;

      const user = await prisma.runAsRoot(() => prisma.user
        .findUnique({ where: { email }, select: { id: true, state: true, role: true } }));

      if (!user) {
        throw new GraphQLError('Signin failed user does not exist');
      }
      if (user.state === State.ARCHIVED || user.state === State.REJECTED || user.state === State.COMPLETED) {
        throw new GraphQLError("Your account is deactivated")
      }
      // if (user.state === State.PENDING || user.state === State.REVIEW) {
      //   throw new GraphQLError("Your account is under review please try again later")
      // }
      if (user.role === Role.CONSUMER || user.role === Role.PROVIDER || user.role === Role.MANAGER || user.role === Role.SUPERUSER) {

        await this._setUserClaims(user.id, user.role);
      }
      const returnSecureToken = true;
      const buffer = Buffer.from(
        JSON.stringify({ email, password, returnSecureToken }),
      );

      return this.httpService.axiosRef
        .post(this.firebaseApp.signInWithEmailPath, buffer)
        .then(async ({ status, data }) => {

          if (status === 200) {
            const { idToken } = data;
            const session = await this.createSessionToken(idToken, prisma, select).catch(
              (e) => e,
            );
            if (session instanceof Error) {
              const { message } = session;
              throw new GraphQLError(message || 'Signin failed something went wrong');
            }
            return session;
          }
          throw new GraphQLError(`Network error code ${status}`);

        })
    } catch ({ message }) {
      throw new GraphQLError(`${message}`);
    }
  }

  async _createUserWithEmail(email, password, displayName, phoneNumber?: string, photoURL?: string) {
    return this.firebaseApp.admin.auth().createUser({
      email,
      emailVerified: false,
      phoneNumber,
      password,
      displayName,
      photoURL,
      disabled: false,
    });
  }

  async _setUserClaims(id: string, role: string) {
    return this.firebaseApp.admin
      .auth()
      .setCustomUserClaims(id, { role: role })
      .then(() => true)
    //.catch(() => false);
  }

  async createSessionToken(idToken: string, prisma: PrismaClient, select, expiresIn = 60 * 60 * 5 * 24 * 1000): Promise<any> {
    try {
      const decodedIdToken = await this.firebaseApp.admin
        .auth()
        .verifyIdToken(idToken, true);
      // Only process if the user just signed in in the last 5 minutes.
      if (new Date().getTime() / 1000 - decodedIdToken.auth_time < 5 * 60) {
        //   // Create session cookie and return it.
        const token = await this.firebaseApp.admin.auth()
          .createSessionCookie(idToken, { expiresIn });
        debugger
        const user = await prisma.runAs({
          role: decodedIdToken.role,
          id: decodedIdToken.uid
        }, () => prisma.user.findUnique({ where: { id: decodedIdToken.uid }, select }));

        return {
          user,
          token,
          error: false,
          message: 'Session created successfully',
        };

      }
      return {
        error: true,
        message: 'A user that was not recently signed in is trying to set a session',
      };
    }
    catch (e) {
      throw new GraphQLError('Failed to create session');

    }
  }

  async destroySessionToken(sessionToken) {
    return this.firebaseApp.admin
      .auth()
      .verifySessionCookie(sessionToken)
      .then((decodedClaims) =>
        this.firebaseApp.admin.auth().revokeRefreshTokens(decodedClaims.sub),
      )
      .then(() => ({
        status: true,
        message: 'Session destroyed successfully',
      })).catch(({ message }) => {
        return {
          status: false,
          message: 'Operation Failed'
        }
      });
  }



}

/*
linkIdProvider({ idToken, username }) {
  log(idToken);
  log(username);
  if (!idToken) {
    throw new Error('No id token provided');
  } else if (!username) {
    throw new Error('No username provided');
  } else {
    return admin.auth().verifyIdToken(idToken, true)
      .then(async (info) => {
        const {
          role, uid,
        } = info;

        if (role) {
          throw new Error('Provided token is already linked to a user');
        } else if (!isLength(username, 3)) {
          throw new Error('Username must be 3 characters or more');
        } else if (!isAlphanumeric(username)) {
          throw new Error('Username can not contain special characters');
        } else {
          const user = await admin.auth().getUser(uid).catch((error) => error);
          if (user instanceof Error) {
            throw new Error('Failed to get user account');
          } else {
            const {
              email, displayName, photoURL, phoneNumber, disabled, emailVerified,
            } = user;

            const users = DB.collection('Users');
            const exist = await users.firstExample({ email }).catch(() => false);
            const exist2 = await users.firstExample({ username }).catch(() => false);
            if (exist) {
            // Todo handle case were user is in database and firebase but has no claims set
              throw new Error('The email address is already in use by another account');
            } else if (exist2) {
              throw new Error('The Username is already in use by another account');
            } else {
            // link user here
              const auser = await users.save({
                _key: uid,
                username,
                displayName,
                phoneNumber,
                disabled,
                email,
                emailVerified,
                avator: photoURL,
                role: 'SUBSCRIBER',
              }).catch((error) => error);

              if (auser instanceof Error) {
                throw new Error(auser.message || 'Failed to create user account');
              } else {
              // set claims here
                const setClaims = await this._setUserClaims(auser);
                if (setClaims) {
                  const data = await users.document(auser).catch((error) => error);
                  if (data instanceof Error) {
                    throw new Error('Failed to get user info with session');
                  } else {
                    return { user: data, message: 'Account linked successfully' };
                  }
                }
              }
            }
          }
        }
        return null;
      });
  }
}

async updateProfile(user, profile, avatorFile, coverFile) {
  this.isLogedIn(user._id);
  const userData = {};


  if (avatorFile) {
    const {
      createReadStream, filename, mimetype,
    } = await avatorFile;
    const stream = createReadStream();
    const fileUrl = await uploadFile(user._id, `profile/${user._id}/avator/${filename}`, mimetype, stream)
      .catch((e) => {
        const { message } = e;
        throw new Error(message || 'Failed to upload file');
      });
    if (!fileUrl) throw new Error('Failed to upload file');
    log(fileUrl);
    userData.photoURL = fileUrl;
  }
  // todo handle cover file
  if (coverFile) {
    const {
      createReadStream, filename, mimetype,
    } = await coverFile;
    const stream2 = createReadStream();
    const fileUrl2 = await uploadFile(user._id, `profile/${user._id}/cover/${filename}`, mimetype, stream2)
      .catch((e) => {
        const { message } = e;
        throw new Error(message || 'Failed to upload file');
      });
    if (!fileUrl2) throw new Error('Failed to upload file');
    userData.cover = fileUrl2;
  }
  let newUsername;
  if (profile) {
    const {
      username, avator, displayName, email, phoneNumber, cover, bio,
    } = profile;
    if (username) {
      const exist = await this.usersCol.firstExample({ username }).catch((e) => e);
      if (!(exist instanceof Error)) {
        if (exist._key !== user._key) {
          throw new Error('Username already in use with another account');
        }
      }
      newUsername = username;
      if (!isAlphanumeric(newUsername) || !isLength(newUsername, 3)) {
        throw new Error('Username must be 3 characters or more and not contain special characters');
      }
    }
    // const oldInfo = await this.usersCol.document(_id).catch((e) => e);
    // if (oldInfo instanceof Error) throw oldInfo;
    // eslint-disable-next-line prefer-const

    if (bio) userData.bio = bio;
    if (avator) userData.photoURL = avator;
    if (displayName && isLength(displayName, 2)) userData.displayName = displayName;
    if (email) userData.email = email;
    if (phoneNumber) userData.phoneNumber = phoneNumber;
    userData.cover = cover || userData.cover || user.cover;
  }
  const fuser = await admin.auth().updateUser(user._key, userData).catch((e) => e);
  if (fuser instanceof Error) {
    const { message } = fuser;
    throw new Error(message || 'Failed to update firebase user');
  }
  newUsername = newUsername || user.username;
  const data = {
    username: newUsername,
    email: fuser.email,
    phoneNumber: fuser.phoneNumber,
    avator: fuser.photoURL,
    displayName: fuser.displayName,
    disabled: fuser.disabled,
    emailVerified: fuser.emailVerified,
    cover: userData.cover,
  };
  if (userData.bio) data.bio = userData.bio;
  const auser = await this.usersCol.update(user._id, data)
    .then(() => this.usersCol.document(user._id)).catch((e) => e);
  if (auser instanceof Error) {
    throw auser;
  }
  return { user: auser, message: 'Profile updated successfully' };
}
*/

