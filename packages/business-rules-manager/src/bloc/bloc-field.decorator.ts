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
           
          return method.apply(this, [...arguments,arguments[2][`${type}_${field}`]]);
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