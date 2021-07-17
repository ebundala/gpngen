import { BusinessRulesManager } from "./business-rules-manager.service";
import { BUSINESS_LOGIC_FIELD } from "./constants";

export function BlocFieldResolver(type: string, field: string): MethodDecorator {
    return (target: any, propertyKey: string, propertyDescriptor: PropertyDescriptor) => {
        const key = `${BUSINESS_LOGIC_FIELD}/${propertyKey}`
         const hooks = Reflect.getMetadata(key, BusinessRulesManager) ?? [];
         hooks.push([type,field])
        Reflect.defineMetadata(key, hooks, BusinessRulesManager);
        return propertyDescriptor;
    };
}