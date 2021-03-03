import { QueriesAndMutations } from '@paljs/types';

export function createQueriesAndMutations(
  name: string,
  model: string,
  exclude: QueriesAndMutations[],
  onDelete?: boolean,
): any {
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
    findUnique${name}(where: ${name}WhereUniqueInput!): ${name}Response!`;
    operations.queries.resolver += `
    @Query((returns)=>${name}Response)
    findUnique${name}(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<${name}Response|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', '${name}', { select: {  } });
      return ctx.prisma.${model}.findUnique({...args,...select})
      .then((data)=>({
        status:true,
        data,
        message:'ok'
      })).catch(({message})=>({
       status:false,
       data:null,
       message:message||'unknown error'
      }))
    }`;
  }

  if (!exclude.includes('findFirst')) {
    operations.queries.type += `
    findFirst${name}(
      where: ${name}WhereInput
      orderBy: [${name}OrderByInput!]
      cursor: ${name}WhereUniqueInput
      distinct: [${name}ScalarFieldEnum!]
      skip: Int
      take: Int
    ): ${name}Response!`;
    operations.queries.resolver += `
    @Query((returns)=>${name}Response)
    findFirst${name}(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<${name}Response|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', '${name}', { select: {  } });
      return ctx.prisma.${model}.findFirst({...args,...select})
      .then((data)=>({
        status:true,
        data,
        message:'ok'
      })).catch(({message})=>({
       status:false,
       data:[],
       message:message||'unknown error'
      }));
      
    }`;
  }

  if (!exclude.includes('findMany')) {
    operations.queries.type += `
    findMany${name}(
      where: ${name}WhereInput
      orderBy: [${name}OrderByInput!]
      cursor: ${name}WhereUniqueInput
      distinct: [${name}ScalarFieldEnum!]
      skip: Int
      take: Int
    ): ${name}ListResponse!`;
    operations.queries.resolver += `
    @Query((returns)=>${name}ListResponse)
    findMany${name}(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<${name}ListResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', '${name}', { select: {  } });
      return ctx.prisma.${model}.findMany({...args,...select})
      .then((data)=>({
        status:true,
        data:data??[],
        message:'ok'
      })).catch(({message})=>({
       status:false,
       data:[],
       message:message||'unknown error'
      }));
      
    }`;
  }

  if (!exclude.includes('findCount')) {
    operations.queries.type += `
    findMany${name}Count(
      where: ${name}WhereInput
      orderBy: [${name}OrderByInput!]
      cursor: ${name}WhereUniqueInput
      distinct: [${name}ScalarFieldEnum!]
      skip: Int
      take: Int
    ): ${name}CountResponse!`;
    operations.queries.resolver += `
    @Query((returns)=>${name}CountResponse)
    findMany${name}Count(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<${name}CountResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', '${name}', { select: {  } });
      return ctx.prisma.${model}.count({...args,...select})
      .then((data)=>({
        status:true,
        data,
        message:'ok'
      })).catch(({message})=>({
       status:false,
       data:null,
       message:message||'unknown error'
      }))
    }`;
  }

  if (!exclude.includes('aggregate')) {
    operations.queries.type += `
    aggregate${name}(
      where: ${name}WhereInput
      orderBy: [${name}OrderByInput!]
      cursor: ${name}WhereUniqueInput
      distinct: [${name}ScalarFieldEnum!]
      skip: Int
      take: Int
    ): Aggregate${name}Response!`;
    operations.queries.resolver += `
    @Query((returns)=>Aggregate${name}Response)
    aggregate${name}(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<Aggregate${name}Response|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', '${name}', { select: {  } });

      return ctx.prisma.${model}.aggregate({...args,...select})
      .then((data)=>({
        status:true,
        data,
        message:'ok'
      })).catch(({message})=>({
       status:false,
       data:null,
       message:message||'unknown error'
      }))
    }`;
  }

  if (!exclude.includes('createOne')) {
    operations.mutations.type += `
    createOne${name}(data: ${name}CreateInput!): ${name}Response!`;
    operations.mutations.resolver += `
    @Mutation((returns)=>${name}Response)
    createOne${name}(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<${name}Response|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', '${name}', { select: {  } });
      return ctx.prisma.${model}.create({...args,...select})
      .then((data)=>({
        status:true,
        data,
        message:'ok'
      })).catch(({message})=>({
       status:false,
       data:null,
       message:message||'unknown error'
      }))
    }`;
  }

  if (!exclude.includes('updateOne')) {
    operations.mutations.type += `
    updateOne${name}(
      where: ${name}WhereUniqueInput!
      data: ${name}UpdateInput!
    ): ${name}Response!`;
    operations.mutations.resolver += `
    @Mutation((returns)=>${name}Response)
    updateOne${name}(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<${name}Response|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', '${name}', { select: {  } });
      return ctx.prisma.${model}.update({...args,...select})
      .then((data)=>({
        status:true,
        data,
        message:'ok'
      })).catch(({message})=>({
       status:false,
       data:null,
       message:message||'unknown error'
      }))
    }`;
  }

  if (!exclude.includes('deleteOne')) {
    operations.mutations.type += `
    deleteOne${name}(where: ${name}WhereUniqueInput!): ${name}Response!`;
    operations.mutations.resolver += `
    @Mutation((returns)=>${name}Response)
    async deleteOne${name}(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<${name}Response|any>{
      ${onDelete
        ? `await ctx.prisma.onDelete({ model: '${name}', where: args.where })`
        : ''
      }
      const select = ctx.prisma.getSelection(info).valueOf('data', '${name}', { select: {  } });

      return ctx.prisma.${model}.delete({...args,...select})
      .then((data)=>({
        status:true,
        data,
        message:'ok'
      })).catch(({message})=>({
       status:false,
       data:null,
       message:message||'unknown error'
      }))
    }`;
  }

  if (!exclude.includes('upsertOne')) {
    operations.mutations.type += `
    upsertOne${name}(
      where: ${name}WhereUniqueInput!
      create: ${name}CreateInput!
      update: ${name}UpdateInput!
    ): ${name}Response!`;
    operations.mutations.resolver += `
    @Mutation((returns)=>${name}Response)
    async upsertOne${name}(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<${name}Response|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', '${name}', { select: {  } });
      return ctx.prisma.${model}.upsert({...args,...select})
      .then((data)=>({
        status:true,
        data,
        message:'ok'
      })).catch(({message})=>({
       status:false,
       data:null,
       message:message||'unknown error'
      }));
    }`;
  }

  if (!exclude.includes('deleteMany')) {
    operations.mutations.type += `
    deleteMany${name}(where: ${name}WhereInput!): ${name}BatchResponse`;
    operations.mutations.resolver += `
    @Mutation((returns)=>${name}BatchResponse)
   async deleteMany${name}(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<${name}BatchResponse|any>{
      ${onDelete
        ? `await ctx.prisma.onDelete({ model: '${name}', where: args.where })`
        : ''
      }
      const select = ctx.prisma.getSelection(info).valueOf('data', '${name}', { select: {  } });

      return ctx.prisma.${model}.deleteMany({...args,...select})
      .then((data)=>({
        status:true,
        data,
        message:'ok'
      })).catch(({message})=>({
       status:false,
       data:null,
       message:message||'unknown error'
      }));
    }`;
  }

  if (!exclude.includes('updateMany')) {
    operations.mutations.type += `
    updateMany${name}(
      where: ${name}WhereInput!
      data: ${name}UpdateManyMutationInput!
    ): ${name}BatchResponse!`;
    operations.mutations.resolver += `
    @Mutation((returns)=>${name}BatchResponse)
    updateMany${name}(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<${name}BatchResponse|any>{
      const select = ctx.prisma.getSelection(info).valueOf('data', '${name}', { select: {  } });
      return ctx.prisma.${model}.updateMany({...args,...select})
      .then((data)=>({
        status:true,
        data,
        message:'ok'
      })).catch(({message})=>({
       status:false,
       data:null,
       message:message||'unknown error'
      }));
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
