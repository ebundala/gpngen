
export interface BaseRole{
  //TODO limit duplicates
    parents?: string[];//BaseRole<MutationRules,QueriesRules>
    readRules?:string[]
    writeRules?:string[]
   addReadRule?(v :string[]): boolean
   removeReadRule?(v :string): boolean

   addWriteRules?(v:string[]):boolean
   removeWriteRule?(v:string):boolean
   addParent?(p:string):boolean
   removeParent?(p:string):boolean
}
export class Role implements BaseRole{
   public parents?:string[]=[];
   public readRules?:string[]=[];
  public  writeRules?:string[]=[];
    addReadRule(v:string[]){
        return this.readRules.push(...v)>0
    }
    addWriteRule(v:string[]){
       return this.writeRules.push(...v)>0
    }
    addParent(p:string): boolean{
      return this.parents.push(p)>0
    }
    removeReadRule?(v :string): boolean{
      const i=  this.readRules.indexOf(v);
      if(i>-1){
          const p1=this.readRules.splice(i,1);
          return p1.length===1

      }
      return false;
    }

    removeWriteRule?(v:string):boolean{
      const i=  this.writeRules.indexOf(v);
      if(i>-1){
          const p1=this.parents.splice(i,1);
          return p1.length===1

      }
      return false;
    }
    removeParent?(p:string):boolean {
      const i=  this.parents.indexOf(p);
      if(i>-1){
          const p1=this.parents.splice(i,1);
          return p1.length===1

      }
      return false;
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
          return [role.constructor.name,v]
      })
     return rules3;
  }
  return []
}

export const ruleGroup=(group:string,rules:string[],filterBy:{include?:string[],exclude?:string[],extensions?:string[]},includeDefault=false):string[]=>{
  const {include,exclude,extensions}=filterBy;
  const ext=extensions?.map((v)=>`${group}.${v}`)??[]
  return rules
  .filter((g)=>g===group||g.startsWith(`${group}.`))
  .filter((g1)=>{
     if(g1===group) return true;
     else{
         if(include&&include.filter((i)=>`${group}.${i}`===g1).length>0) return true;
         else if(exclude&&exclude.filter((i)=>g1.startsWith(`${group}.${i}`)).length>0) return false;
         else return includeDefault;
     }
  }).concat(ext);
}