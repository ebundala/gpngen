import { BusinessRulesManager } from './business-rules-manager.service';
import { BUSINESS_LOGIC_VALIDATOR } from './constants';

export function BlocValidate(hook: string): MethodDecorator {
    return (target: any, propertyKey: string, propertyDescriptor: PropertyDescriptor) => {
        Reflect.defineMetadata(`${BUSINESS_LOGIC_VALIDATOR}/${propertyKey}`, hook, BusinessRulesManager);
        return propertyDescriptor;
    };
}