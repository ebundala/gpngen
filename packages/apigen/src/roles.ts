

export interface BaseRole{
  parents?: string[];
  rules?: string[][]
    
  addRule?(v: string[]): boolean
  removeRule?(v: string): boolean
   addParent?(p:string):boolean
   removeParent?(p:string):boolean
}
export class Role implements BaseRole{
   public parents?:string[]=[];
  public rules?: string[][] = [];
  addRule(v: string[]) {
    return this.rules.push(v) > 0
    }

    addParent(p:string): boolean{
      return this.parents.push(p)>0
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
  const { rules, parents } = role;
  return rules;
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
