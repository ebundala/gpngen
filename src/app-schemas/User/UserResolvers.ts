
import { Args, Context, Info, Parent, ResolveField, Resolver } from '@nestjs/graphql';
import {
  User
} from '../../models/graphql';
import { PrismaClient } from '../../modules/prisma-client/prisma-client-service';

@Resolver((of) => User)
export class UserResolver {
  constructor(
    private readonly prisma: PrismaClient
  ) { }
  @ResolveField((returns) => String)
  fullName(@Parent() parent: User, @Args() args, @Context() ctx, @Info() info) {
    // const select = this.prisma.getSelection(info).value;
    // return this.prisma.user.findUnique({...args,...select})

    return `${parent.displayName || ''}  ${parent.email || ''}`;
  }
  /*@Query((returns) => User)
  findUniqueUser(@Parent() parent, @Args() args, @Context() ctx, @Info() info) {
    const select = this.prisma.getSelection(info).value;
    return this.prisma.user.findUnique({ ...args, ...select })
  }
  @Query((returns) => User)
  findFirstUser(@Parent() parent, @Args() args, @Context() ctx, @Info() info) {
    const select = this.prisma.getSelection(info).value;
    return this.prisma.user.findFirst({ ...args, ...select })
  }
  @Query((returns) => User)
  findManyUser(@Parent() parent, @Args() args, @Context() ctx, @Info() info) {
    const select = this.prisma.getSelection(info).value;
    return this.prisma.user.findMany({ ...args, ...select })
  }
  @Query((returns) => User)
  findManyUserCount(@Parent() parent, @Args() args, @Context() ctx, @Info() info) {
    const select = this.prisma.getSelection(info).value;
    return this.prisma.user.count({ ...args, ...select })
  }
  @Query((returns) => User)
  aggregateUser(@Parent() parent, @Args() args, @Context() ctx, @Info() info) {
    return this.prisma.user.aggregate(args)
  }
  @Mutation((returns) => User)
  createOneUser(@Parent() parent, @Args() args, @Context() ctx, @Info() info) {
    const select = this.prisma.getSelection(info).value;
    return this.prisma.user.create({ ...args, ...select })
  }
  @Mutation((returns) => User)
  updateOneUser(@Parent() parent, @Args() args, @Context() ctx, @Info() info) {
    const select = this.prisma.getSelection(info).value;
    return this.prisma.user.update({ ...args, ...select })
  }
  @Mutation((returns) => User)
  async deleteOneUser(@Parent() parent, @Args() args, @Context() ctx, @Info() info) {
    await this.prisma.onDelete({ model: 'User', where: args.where })
    return this.prisma.user.delete(args)
  }
  @Mutation((returns) => User)
  async upsertOneUser(@Parent() parent, @Args() args, @Context() ctx, @Info() info) {
    const select = this.prisma.getSelection(info).value;
    return this.prisma.user.upsert({ ...args, ...select })
  }
  @Mutation((returns) => BatchPayload)
  async deleteManyUser(@Parent() parent, @Args() args, @Context() ctx, @Info() info) {
    await this.prisma.onDelete({ model: 'User', where: args.where })
    return this.prisma.user.deleteMany(args)
  }
  @Mutation((returns) => BatchPayload)
  updateManyUser(@Parent() parent, @Args() args, @Context() ctx, @Info() info) {
    const select = this.prisma.getSelection(info).value;
    return this.prisma.user.updateMany({ ...args, ...select })
  }*/
}