//import { TenantContext } from '@mechsoft/common';
import { onDeleteArgs, PrismaDelete, PrismaSelect } from '@paljs/plugins';
import { Prisma, PrismaClient as _PrismaClient } from '@prisma/client';

export class PrismaClient extends _PrismaClient {
  private _role:string;
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
  set overrideRole(role:string){
    this._role=role;
  }
  get isRoleOverriden():boolean{
    return !!this._role;
  }
  get getRole(){
    return this._role
  }
  public resetRole(){
    this._role=null;
  }
}

export const PrismaClientService = {
  provide: PrismaClient,
  // useValue: new PrismaClient({ log: ['query'] }),
  useClass: PrismaClient,
};
