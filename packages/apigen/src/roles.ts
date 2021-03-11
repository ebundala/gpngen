
export interface BaseRole<MutationRules,QueriesRules>{
  //TODO limit duplicates
    parents?:BaseRole<MutationRules,QueriesRules>[];
    readRules?:QueriesRules[]
    writeRules?:MutationRules[]
   addReadRule?(v :QueriesRules[]): boolean
   removeReadRule?(v :QueriesRules[]): boolean

   addWriteRules?(v:MutationRules[]):boolean
   removeWriteRules?(v:MutationRules[]):boolean
   addParent?(p:BaseRole<MutationRules,QueriesRules>):boolean
   removeParent?(p:BaseRole<MutationRules,QueriesRules>):boolean
}
export class Role<MutationRules,QueriesRules> implements BaseRole<MutationRules,QueriesRules>{
   public parents?:BaseRole<MutationRules,QueriesRules>[]=[];
   public readRules?:QueriesRules[]=[];
  public  writeRules?:MutationRules[]=[];
    addReadRule(v:QueriesRules[]){
        return this.readRules.push(...v)>0
    }
    addWriteRule(v:MutationRules[]){
       return this.writeRules.push(...v)>0
    }
    addParent(p:BaseRole<MutationRules,QueriesRules>): boolean{
      return this.parents.push(p)>0
    }
    removeReadRule?(v :QueriesRules[]): boolean{
        throw new Error('Uimplemented error')
    }

    removeWriteRules?(v:MutationRules[]):boolean{
      throw new Error('Uimplemented error')
    }
    removeParent?(p:BaseRole<MutationRules,QueriesRules>):boolean {
      const i=  this.parents.indexOf(p);
      if(i>-1){
          const p1=this.parents.splice(i,1);
          return p1.length===1

      }
      return false;
    }
} 

export const getRolePolicies= (role:Role<any,any>)=>{
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
export const getRoleGrouping = (role:Role<any,any>)=>{
  const {parents}=role;
  if(parents&&parents.length){
      const rules3=parents.map((v)=>{
          return [role.constructor.name,v.constructor.name]
      })
     return rules3;
  }
  return []
}