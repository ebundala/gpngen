//import { TenantContext } from '@mechsoft/common';
import { onDeleteArgs, PrismaDelete, PrismaSelect } from '@paljs/plugins';
import { Prisma, PrismaClient as _PrismaClient } from '@prisma/client';

export class PrismaClient extends _PrismaClient {
  private _role:string;
  private _byPassChecks=false;
  private _uid: string;
  constructor(options: Prisma.PrismaClientOptions) {
    super(options);
    
  }
  async onDelete(args: onDeleteArgs) {
    const prismaDelete = new PrismaDelete(this);
    await prismaDelete.onDelete(args);
  }

  public getSelection(info): PrismaSelect {
    return new PrismaSelect(info);
  }
  set overrideRole(user:{role:string,id?:string}){
    this._role=user.role;
    this._uid=user.id
  }
  get isRoleOverriden():boolean{
    return !!this._role;
  }
  get getRole(){
    return {role:this._role,uid:this._uid}
  }
  public resetRole(){
    this._role=null;
    this._uid=null;
  }
  get runningAsRoot(){
    return this._byPassChecks;
  }
  public async runAsRoot<T=any>(cb:()=>Promise<T>){
    this._byPassChecks=true;
    try{
     const result =  await cb() as T;
     this._byPassChecks=false;
     return result;
    }catch(e){
    this._byPassChecks=false;
    throw e;
    }
  }
  public async runAs<T=any>(user:{role:string,id?:string},cb:()=>Promise<T>){
    this.overrideRole=user
    
    try{
     const result =  await cb() as T;
     this.resetRole();
     return result;
    }catch(e){
    this.resetRole();
    throw e;
    }
  }
}

export const PrismaClientService = {
  provide: PrismaClient,
  // useValue: new PrismaClient({ log: ['query'] }),
  useClass: PrismaClient,
};
