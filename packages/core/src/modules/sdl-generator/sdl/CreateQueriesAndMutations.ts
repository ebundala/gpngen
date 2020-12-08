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
      resolver: '', //'Query: {',
    },
    mutations: {
      type: '\nextend type Mutation {',
      resolver: '', //'Mutation: {',
    },
  };

  if (!exclude.includes('findUnique')) {
    operations.queries.type += `
    findUnique${name}(where: ${name}WhereUniqueInput!): ${name}`;
    operations.queries.resolver += `
    @Query((returns)=>${name})
    findUnique${name}(@Parent() parent, @Args() args, @Context() ctx, @Info() info){
      return this.prisma.${model}.findUnique(args)
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
    findFirst${name}(@Parent() parent, @Args() args, @Context() ctx, @Info() info){
      return this.prisma.${model}.findFirst(args)
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
    findMany${name}(@Parent() parent, @Args() args, @Context() ctx, @Info() info){
      return this.prisma.${model}.findMany(args)
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
    findMany${name}Count(@Parent() parent, @Args() args, @Context() ctx, @Info() info){
      return this.prisma.${model}.count(args)
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
    aggregate${name}(@Parent() parent, @Args() args, @Context() ctx, @Info() info){
      return this.prisma.${model}.aggregate(args)
    }`;
  }

  if (!exclude.includes('createOne')) {
    operations.mutations.type += `
    createOne${name}(data: ${name}CreateInput!): ${name}!`;
    operations.mutations.resolver += `
    @Mutation((returns)=>${name})
    createOne${name}(@Parent() parent, @Args() args, @Context() ctx, @Info() info){
      return this.prisma.${model}.create(args)
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
    updateOne${name}(@Parent() parent, @Args() args, @Context() ctx, @Info() info){
      return this.prisma.${model}.update(args)
    }`;
  }

  if (!exclude.includes('deleteOne')) {
    operations.mutations.type += `
    deleteOne${name}(where: ${name}WhereUniqueInput!): ${name}`;
    operations.mutations.resolver += `
    @Mutation((returns)=>${name})
    async deleteOne${name}(@Parent() parent, @Args() args, @Context() ctx, @Info() info){
      ${onDelete
        ? `await this.prisma.onDelete({ model: '${name}', where: args.where })`
        : ''
      }
      return this.prisma.${model}.delete(args)
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
    async upsertOne${name}(@Parent() parent, @Args() args, @Context() ctx, @Info() info){
      return this.prisma.${model}.upsert(args)
    }`;
  }

  if (!exclude.includes('deleteMany')) {
    operations.mutations.type += `
    deleteMany${name}(where: ${name}WhereInput): BatchPayload`;
    operations.mutations.resolver += `
    @Mutation((returns)=>BatchPayload)
   async deleteMany${name}(@Parent() parent, @Args() args, @Context() ctx, @Info() info){
      ${onDelete
        ? `await this.prisma.onDelete({ model: '${name}', where: args.where })`
        : ''
      }
      return this.prisma.${model}.deleteMany(args)
    }`;
  }

  if (!exclude.includes('updateMany')) {
    operations.mutations.type += `
    updateMany${name}(
      where: ${name}WhereInput
      data: ${name}UpdateManyMutationInput
    ): BatchPayload`;
    operations.mutations.resolver += `
    @Mutation((returns)=>BatchPayload)
    updateMany${name}(@Parent() parent, @Args() args, @Context() ctx, @Info() info){
      return this.prisma.${model}.updateMany(args)
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
