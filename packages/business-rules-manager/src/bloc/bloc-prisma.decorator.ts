import { BusinessRulesManager } from "./business-rules-manager.service";
import { PRISMA_LOGIC_HOOK } from "./constants";
import { Prisma } from "@prisma/client";
//rename to a more descriptive name instead of before like () 
export function PrismaAttach(model:string,action: Prisma.PrismaAction, before: boolean = false): MethodDecorator {
    return (target: any, propertyKey: string, propertyDescriptor: PropertyDescriptor) => {
        const key = `${PRISMA_LOGIC_HOOK}/${propertyKey}`
        const hooks = Reflect.getMetadata(key, BusinessRulesManager) ?? [];
        hooks.push(`${before ? 'before:' : ''}${model}:${action}`)
        Reflect.defineMetadata(key, hooks, BusinessRulesManager);
        return propertyDescriptor;
    };
}