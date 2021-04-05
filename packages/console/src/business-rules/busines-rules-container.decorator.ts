import { BUSINESS_LOGIC_CONTAINER } from "./constants";

export function Bloc(): ClassDecorator {
    return (target: any) => {
        return Reflect.defineMetadata(BUSINESS_LOGIC_CONTAINER, true, target);
    };
}




