import { Prisma } from "@prisma/client";
import { BusinessRulesManager } from "./business-rules-manager.service";
import { PRISMA_LOGIC_HOOK } from "./constants";

export function PrismaAttach(model:string,action: Prisma.PrismaAction, before: boolean = false): MethodDecorator {
    return (target: any, propertyKey: string, propertyDescriptor: PropertyDescriptor) => {
        const key = `${PRISMA_LOGIC_HOOK}/${propertyKey}`
        const hooks = Reflect.getMetadata(key, BusinessRulesManager) ?? [];
        hooks.push(`${before ? 'before:' : ''}${model}:${action}`)
        Reflect.defineMetadata(key, hooks, BusinessRulesManager);
        return propertyDescriptor;
    };
}