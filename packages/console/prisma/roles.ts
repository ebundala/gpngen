import { MutationRules, QueriesRules } from "./rules";

export interface BaseRole{
  //  name: string
  //TODO limit duplicates
    parents?:BaseRole[];
    readRules?:QueriesRules[]
    writeRules?:MutationRules[]
   addReadRule?(v :QueriesRules[]): boolean
   removeReadRule?(v :QueriesRules[]): boolean

   addWriteRules?(v:MutationRules[]):boolean
   removeWriteRules?(v:MutationRules[]):boolean
   addParent?(p:BaseRole):boolean
   removeParent?(p:BaseRole):boolean
}
export class Role implements BaseRole{
   public parents?:BaseRole[]=[];
   public readRules?:QueriesRules[]=[];
  public  writeRules?:MutationRules[]=[];
    addReadRule(v:QueriesRules[]){
        return this.readRules.push(...v)>0
    }
    addWriteRule(v:MutationRules[]){
       return this.writeRules.push(...v)>0
    }
    addParent(p:BaseRole): boolean{
      return this.parents.push(p)>0
    }
    removeReadRule?(v :QueriesRules[]): boolean{
        return false;
    }

    removeWriteRules?(v:MutationRules[]):boolean{
        //this.writeRules.indexOf()
        return false;
    }
    removeParent?(p:BaseRole):boolean {
      const i=  this.parents.indexOf(p);
      if(i>-1){
          const p1=this.parents.splice(i,1);
          return p1.length===1

      }
      return false;
    }
} 
export class Viewer extends Role{
    constructor(){
        super();
        this.addReadRule([
            //tenant
            'findUniqueTenant',
            'findUniqueTenant.where',
            'findUniqueTenant.where.id',
            
            'findManyTenant',
            'findManyTenant.where',
            'findManyTenant.where.id',
            'findManyTenant.where.url',
            'findManyTenant.where.name',
            'findManyTenant.where.name.mode',

            'findFirstTenant',
            'findFirstTenant.where',
            'findFirstTenant.where.id',
            'findFirstTenant.where.url',
            'findFirstTenant.where.name',
            'findFirstTenant.where.name.mode',
        ]);
    }
    
    

}

export class Editor extends Role{

    constructor(){
        super();
        this.addParent(new Viewer())
        this.addWriteRule([
            'createOneTenant',
            'createOneTenant.data',
          //  'createOneTenant.data.id',
            'createOneTenant.data.name',
            'createOneTenant.data.url',
            'createOneUser.data.comments.create.content',

        ])
    }
    
}

export class Admin extends Role{

    constructor(){
        super();
        this.addParent(new Editor())
        this.addWriteRule([
            //user
            'createOneUser',
            'createOneUser.data',
            'createOneUser.data.email',
            'createOneUser.data.displayName',
            'updateOneUser',
            'updateOneUser.data',
            'updateOneUser.data.email',
            'updateOneUser.data.displayName',
            'updateOneUser.data.comments',
            'updateOneUser.data.comments.create',
            'updateOneUser.data.comments.create.content',
        ])
    }
    
}

export const getRolePolicies= (role:Role)=>{
    const {readRules,writeRules,parents}=role;
    const policies: string[][]=[];
    if(readRules&&readRules.length){
      const rules=  readRules.map((v)=>{
            return [role.constructor.name,v,'read'];
        });
        policies.push(...rules)
    }
    if(writeRules&&writeRules.length){
      const rules2=  writeRules.map((v)=>{
            return [role.constructor.name,v,'write'];
        });
        policies.push(...rules2)
    }
   
    return policies;
}
export const getRoleGrouping = (role:Role)=>{
    const {parents}=role;
    if(parents&&parents.length){
        const rules3=parents.map((v)=>{
            return [role.constructor.name,v.constructor.name]
        })
       return rules3;
    }
    return []
}