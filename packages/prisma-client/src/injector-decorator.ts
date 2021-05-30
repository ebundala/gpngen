import { PRISMA_CLIENT_INJECTOR } from "./constants";

export function PrismaClientInjector(): ClassDecorator {
    return (target: any) => {
        return Reflect.defineMetadata(PRISMA_CLIENT_INJECTOR, true, target);
    };
}