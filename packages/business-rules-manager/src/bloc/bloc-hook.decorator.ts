import { BusinessRulesManager } from './business-rules-manager.service';
import { BUSINESS_LOGIC_HOOK, PRISMA_LOGIC_HOOK } from './constants';

export function BlocAttach(hook: string, before: boolean = false): MethodDecorator {
    return (target: any, propertyKey: string, propertyDescriptor: PropertyDescriptor) => {
        const key = `${BUSINESS_LOGIC_HOOK}/${propertyKey}`
        const hooks = Reflect.getMetadata(key, BusinessRulesManager) ?? [];
        hooks.push(`${before ? 'before:' : ''}${hook}`)
        Reflect.defineMetadata(key, hooks, BusinessRulesManager);
        return propertyDescriptor;
    };
}




// // const injectService = Inject(BusinessRulesManager);

// return (target: any, propertyKey: string, propertyDescriptor: PropertyDescriptor) => {
//     //  injectService(target, 'bloc');
//        //get original method
//        const originalMethod = propertyDescriptor.value;
//        //redefine descriptor value within own function block
//        propertyDescriptor.value = async function (...args: any[]) {
//            const bloc: BusinessRulesManager = this.bloc;
//            const callback = async (args) => {
//                return await originalMethod.apply(this, args);
//            }
//            bloc.at(hook, callback);
//            return callback(args)
//        }
//        return propertyDescriptor;
//    };

