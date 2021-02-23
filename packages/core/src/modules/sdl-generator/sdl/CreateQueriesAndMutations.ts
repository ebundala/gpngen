import { QueriesAndMutations } from '@paljs/types';

export function createQueriesAndMutations(
  name: string,
  model: string,
  exclude: QueriesAndMutations[],
  onDelete?: boolean,
) {
  const operations = {
    queries: {
      type: 'extend type Query {',
      resolver: '',
    },
    mutations: {
      type: '\nextend type Mutation {',
      resolver: '',
    },
  };

  if (!exclude.includes('findUnique')) {
    operations.queries.type += `
    findUnique${name}(where: ${name}WhereUniqueInput!): ${name}`;
    operations.queries.resolver += `
    @Query((returns)=>${name})
    findUnique${name}(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info){
      const select = ctx.prisma.getSelection(info).value;
      return ctx.prisma.${model}.findUnique({...args,...select})
    }`;
  }

  if (!exclude.includes('findFirst')) {
    operations.queries.type += `
    findFirst${name}(
      where: ${name}WhereInput
      orderBy: [${name}OrderByInput!]
      cursor: ${name}WhereUniqueInput
      distinct: ${name}DistinctFieldEnum
      skip: Int
      take: Int
    ): [${name}!]`;
    operations.queries.resolver += `
    @Query((returns)=>${name})
    findFirst${name}(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info){
      const select = ctx.prisma.getSelection(info).value;
      return ctx.prisma.${model}.findMany({...args,...select});
      
    }`;
  }

  if (!exclude.includes('findMany')) {
    operations.queries.type += `
    findMany${name}(
      where: ${name}WhereInput
      orderBy: [${name}OrderByInput!]
      cursor: ${name}WhereUniqueInput
      distinct: ${name}DistinctFieldEnum
      skip: Int
      take: Int
    ): [${name}!]`;
    operations.queries.resolver += `
    @Query((returns)=>${name})
    findMany${name}(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info){
      const select = ctx.prisma.getSelection(info).value;
      return ctx.prisma.${model}.findMany({...args,...select});
      
    }`;
  }

  if (!exclude.includes('findCount')) {
    operations.queries.type += `
    findMany${name}Count(
      where: ${name}WhereInput
      orderBy: [${name}OrderByInput!]
      cursor: ${name}WhereUniqueInput
      distinct: ${name}DistinctFieldEnum
      skip: Int
      take: Int
    ): Int!`;
    operations.queries.resolver += `
    @Query((returns)=>${name})
    findMany${name}Count(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info){
      const select = ctx.prisma.getSelection(info).value;
      return ctx.prisma.${model}.count({...args,...select})
    }`;
  }

  if (!exclude.includes('aggregate')) {
    operations.queries.type += `
    aggregate${name}(
      where: ${name}WhereInput
      orderBy: [${name}OrderByInput!]
      cursor: ${name}WhereUniqueInput
      distinct: ${name}DistinctFieldEnum
      skip: Int
      take: Int
    ): Aggregate${name}`;
    operations.queries.resolver += `
    @Query((returns)=>${name})
    aggregate${name}(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info){
      return ctx.prisma.${model}.aggregate(args)
    }`;
  }

  if (!exclude.includes('createOne')) {
    operations.mutations.type += `
    createOne${name}(data: ${name}CreateInput!): ${name}!`;
    operations.mutations.resolver += `
    @Mutation((returns)=>${name})
    createOne${name}(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info){
      const select = ctx.prisma.getSelection(info).value;
      return ctx.prisma.${model}.create({...args,...select})
    }`;
  }

  if (!exclude.includes('updateOne')) {
    operations.mutations.type += `
    updateOne${name}(
      where: ${name}WhereUniqueInput!
      data: ${name}UpdateInput!
    ): ${name}!`;
    operations.mutations.resolver += `
    @Mutation((returns)=>${name})
    updateOne${name}(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info){
      const select = ctx.prisma.getSelection(info).value;
      return ctx.prisma.${model}.update({...args,...select})
    }`;
  }

  if (!exclude.includes('deleteOne')) {
    operations.mutations.type += `
    deleteOne${name}(where: ${name}WhereUniqueInput!): ${name}`;
    operations.mutations.resolver += `
    @Mutation((returns)=>${name})
    async deleteOne${name}(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info){
      ${onDelete
        ? `await ctx.prisma.onDelete({ model: '${name}', where: args.where })`
        : ''
      }
      return ctx.prisma.${model}.delete(args)
    }`;
  }

  if (!exclude.includes('upsertOne')) {
    operations.mutations.type += `
    upsertOne${name}(
      where: ${name}WhereUniqueInput!
      create: ${name}CreateInput!
      update: ${name}UpdateInput!
    ): ${name}`;
    operations.mutations.resolver += `
    @Mutation((returns)=>${name})
    async upsertOne${name}(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info){
      const select = ctx.prisma.getSelection(info).value;
      return ctx.prisma.${model}.upsert({...args,...select})
    }`;
  }

  if (!exclude.includes('deleteMany')) {
    operations.mutations.type += `
    deleteMany${name}(where: ${name}WhereInput!): BatchPayload`;
    operations.mutations.resolver += `
    @Mutation((returns)=>BatchPayload)
   async deleteMany${name}(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info){
      ${onDelete
        ? `await ctx.prisma.onDelete({ model: '${name}', where: args.where })`
        : ''
      }
      return ctx.prisma.${model}.deleteMany(args)
    }`;
  }

  if (!exclude.includes('updateMany')) {
    operations.mutations.type += `
    updateMany${name}(
      where: ${name}WhereInput!
      data: ${name}UpdateManyMutationInput!
    ): BatchPayload`;
    operations.mutations.resolver += `
    @Mutation((returns)=>BatchPayload)
    updateMany${name}(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info){
      const select = ctx.prisma.getSelection(info).value;
      return ctx.prisma.${model}.updateMany({...args,...select})
    }`;
  }

  operations.queries.type += `
  }`;
  //    operations.queries.resolver += `
  //  },`;
  operations.mutations.type += `
  }`;
  //   operations.mutations.resolver += `
  // }`;
  return operations;
}
