import { BusinessRulesManager } from "./business-rules-manager.service";
import { BUSINESS_LOGIC_FIELD, DATALOADER_ARGUMENT_CONTEXT_KEY, DATALOADER_ARGUMENT_KEY } from "./constants";
import Dataloader from 'dataloader';
export declare type DataloaderInterface = <K, V, C = K>(root:any,args:any,context:any,info:any)=>Dataloader<K, V, C>;
export function BlocFieldResolver(type: string, field: string,dataloaderFactory?:DataloaderInterface): MethodDecorator {
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        const key = `${BUSINESS_LOGIC_FIELD}/${propertyKey}`
         const hooks = Reflect.getMetadata(key, BusinessRulesManager) ?? [];
         hooks.push([[type,field],dataloaderFactory])
        Reflect.defineMetadata(key, hooks, BusinessRulesManager);
        let method = descriptor.value;

        descriptor.value = function () {
           //1. get argument marked as dataloader
           //2. get argument marked as context
           //3. retrieve dataloader from contex and reasign to 1 value
           
           let dataloaderArg:{key:any,value:any},context:{key:Number,value:any};
           for(let i =0;i<arguments.length;i++){
               if(!!Reflect.getOwnMetadata(DATALOADER_ARGUMENT_KEY,arguments[i])){
                   
                  dataloaderArg={key:i,value:arguments[i]}
               }
               if(!!Reflect.getOwnMetadata(DATALOADER_ARGUMENT_CONTEXT_KEY,arguments[i]))
               {
                   
                    context = {key:i,value:arguments[i]}
               }
           }
           if(dataloaderArg&&context){
               arguments[dataloaderArg.key] = context[`${type}_${field}`];
           }
        
          return method.apply(this, arguments);
        }
        return descriptor;
    };
}

export function DataloaderArg(){
    return(target: Object, propertyKey: string | symbol, parameterIndex: number) =>{
    Reflect.defineMetadata( DATALOADER_ARGUMENT_KEY,true,target);
  }
}
  export function DataloaderCtx(){
  return (target: Object, propertyKey: string | symbol, parameterIndex: number) =>{
    Reflect.defineMetadata( DATALOADER_ARGUMENT_CONTEXT_KEY,true,target);
  }
}