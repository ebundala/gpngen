import { BusinessRulesManager } from './business-rules-manager.service';
import { BUSINESS_LOGIC_VALIDATOR } from './constants';

export function BlocValidate(hook: string): MethodDecorator {
    return (target: any, propertyKey: string, propertyDescriptor: PropertyDescriptor) => {
        const key = `${BUSINESS_LOGIC_VALIDATOR}/${propertyKey}`;
        const hooks = Reflect.getMetadata(key, BusinessRulesManager) ?? [];
        hooks.push(hook)
        Reflect.defineMetadata(key, hooks, BusinessRulesManager);
        return propertyDescriptor;
    };
}