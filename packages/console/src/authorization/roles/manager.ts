import { Role } from "@mechsoft/apigen";
import { PROVIDER } from "./roles";

export class MANAGER extends Role {

    constructor() {
        super();
        this.addParent(PROVIDER.name)
        this.addWriteRule([
            //inherit provider
            //update organization            

        ])
    }

}