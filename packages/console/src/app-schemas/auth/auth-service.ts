import { AppLogger } from '@mechsoft/app-logger';
import { FirebaseService } from '@mechsoft/firebase-admin';
import { MailService } from '@mechsoft/mailer';
import { PrismaClient } from '@mechsoft/prisma-client';
import { HttpService, Injectable } from '@nestjs/common';
import { GraphQLError } from 'graphql';
import {
  AuthInput,
  AuthResult,
  Role,
  SignOutResult,
  State
} from '../../models/graphql';
//import {}from 'validator';
@Injectable()
export class AuthService {

  constructor(
    private readonly firebaseApp: FirebaseService,
    private readonly httpService: HttpService,
    private readonly logger: AppLogger,
    private readonly mail: MailService
  ) {
    this.httpService.axiosRef.defaults.baseURL = this.firebaseApp.signInWithProviderHost;
    this.httpService.axiosRef.defaults.headers.post['Content-Type'] = 'application/json';
    this.logger.setContext(AuthService.name);
  }


  async signup(credentials: AuthInput, prisma: PrismaClient): Promise<AuthResult> {
    const res = await this.signupWithEmail(credentials, prisma);
    if (!res.error) {
      const link = await this.firebaseApp.admin.auth().generateEmailVerificationLink(credentials.email);
      await this.mail.sendWelcomeEmail(credentials.email, link).catch((e) => { this.logger.debug(e) });
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

  async signupWithEmail(data: AuthInput, prisma: PrismaClient): Promise<AuthResult> {
    const { email, password, displayName } = data;

    // if (!isEmail(email)) {
    //   throw new GraphQLError('Invalid Email');
    // } else if (!isLength(password, 6)) {
    //   throw new GraphQLError('Password must be atleast 6 characters long');
    // } else if (!isLength(displayName, 3)) {
    //   throw new GraphQLError('Username must be 3 characters or more');
    // } else {
    const users = prisma.user;
    const exist = await users
      .findUnique({ where: { email } })
      .catch(() => false);
    if (exist) {
      throw new GraphQLError(
        'The email address is already in use by another account',
      );
    } else {

      return this._createUserWithEmail(email, password, displayName)
        .then((user) =>
          users.create({
            data: {
              id: user.uid,
              displayName: user.displayName,
              disabled: user.disabled,
              email: user.email,
              emailVerified: user.emailVerified,
              role: Role.CONSUMER,
            },
          }).catch(async ({ message }) => {
            await users.delete({ where: { email } });
            throw new GraphQLError(message || "Failed to create user account");
          })
        )
        .then(async (user) => {
          const setClaims = await this._setUserClaims(user, Role.CONSUMER);
          if (setClaims) {
            /*const session = await this.signInWithEmail({ email, password })
               .catch((e) => e);
 
             if (session instanceof Error) {
               await this.cleanUpOnSignUpFailure(user);
               throw session;
             }
             return session;*/
            // return {
            //  error:false,

            // };

            return {
              error: false,
              message: "Thank you for registering\n you will receive a confimation email when your account is ready",
            }
          }

          if (!await this.cleanUpOnSignUpFailure(user, prisma)) {
            throw new GraphQLError('Failed to cleanup user signup errors')
          };
          throw new GraphQLError('Failed to create user account')

        })
        .then((session) => session);
    }
    //}
  }

  private async cleanUpOnSignUpFailure(user, prisma: PrismaClient) {

    const remove1 = await this.firebaseApp.admin
      .auth()
      .deleteUser(user.id)
      .then(() => true)
      .catch(() => false);
    const remove2 = await prisma.user
      .delete({ where: { id: user.id } })
      .then(() => true)
      .catch(() => false);
    return remove1 && remove2;
  }

  async signInWithEmail({ email, password }, prisma: PrismaClient) {

    const user = await prisma.user
      .findUnique({ where: { email }, select: { id: true, state: true, role: true } });
    if (!user) {
      throw new GraphQLError('Signin failed user does not exist');
    }
    if (user.state === State.ARCHIVED || user.state === State.REJECTED || user.state === State.COMPLETED) {
      throw new GraphQLError("Your account is deactivated")
    }
    if (user.state === State.PENDING || user.state === State.REVIEW) {
      throw new GraphQLError("Your account is under review please try again later")
    }
    if (user.role === Role.PROVIDER || user.role === Role.MANAGER || user.role === Role.SUPERUSER) {

      await this._setUserClaims(user, user.role);
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

          debugger;
          const session = await this.createSessionToken(idToken, prisma).catch(
            (e) => e,
          );
          if (session instanceof Error) {
            const { message } = session;
            throw new Error(message || 'Signin failed something went wrong');
          }
          return session;
        }
        throw Error(`network error code ${status}`);

      }).catch(({ message }) => {
        throw Error(`Invalid credentials: ${message}`);
      });
  }

  async _createUserWithEmail(email, password, displayName) {
    return this.firebaseApp.admin.auth().createUser({
      email,
      emailVerified: false,
      // phoneNumber: '+11234567890',
      password,
      displayName,
      // photoURL: 'http://www.example.com/12345678/photo.png',
      disabled: false,
    });
  }

  async _setUserClaims(user, role: string) {
    return this.firebaseApp.admin
      .auth()
      .setCustomUserClaims(user.id, { role: role })
      .then(() => true)
      .catch(() => false);
  }

  async createSessionToken(idToken:string, prisma: PrismaClient, expiresIn = 60 * 60 * 5 * 24 * 1000):Promise<any> {
    try {
      const decodedIdToken = await this.firebaseApp.admin
        .auth()
        .verifyIdToken(idToken, true);

      // Only process if the user just signed in in the last 5 minutes.
      if (new Date().getTime() / 1000 - decodedIdToken.auth_time < 5 * 60) {
        //   // Create session cookie and return it.
        const token = await this.firebaseApp.admin.auth()
          .createSessionCookie(idToken, { expiresIn });


        const user = await prisma.user.findUnique({ where: { id: decodedIdToken.uid } });

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

