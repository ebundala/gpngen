import { QueriesAndMutations } from '@paljs/types';

export function createQueriesAndMutations(
  name: string,
  model: string,
  exclude: QueriesAndMutations[],
  onDelete?: boolean,
): any {
  const operations = {
    queries: {
        type: '',
        resolver: '',
    },
    mutations: {
        type: '',
        resolver: '',
    },
};
let queries='';
let mutations='';
if (!exclude.includes('findUnique')) {
   queries += `
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
   queries += `
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
   queries += `
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
   queries += `
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
   queries += `
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
    mutations += `
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
    mutations += `
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
    mutations += `
deleteOne${name}(where: ${name}WhereUniqueInput!): ${name}Response!`;
    operations.mutations.resolver += `
@Mutation((returns)=>${name}Response)
async deleteOne${name}(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<${name}Response|any>{
  ${onDelete
        ? `await ctx.prisma.onDelete({ model: '${name}', where: args.where })`
        : ''}
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
    mutations += `
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
    mutations += `
deleteMany${name}(where: ${name}WhereInput!): ${name}BatchResponse`;
    operations.mutations.resolver += `
@Mutation((returns)=>${name}BatchResponse)
async deleteMany${name}(@Parent() parent, @Args() args, @Context() ctx: TenantContext, @Info() info):Promise<${name}BatchResponse|any>{
  ${onDelete
        ? `await ctx.prisma.onDelete({ model: '${name}', where: args.where })`
        : ''}
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
    mutations += `
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
if(queries.length>1){
operations.queries.type = `
extend type Query {
${queries}
}`;
}
if(mutations.length>1){
operations.mutations.type = `
extend type Mutation {
${mutations}
}`;
}  
return operations;
  return operations;
}
