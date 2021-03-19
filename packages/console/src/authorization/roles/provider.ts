import { Role } from "@mechsoft/apigen";
import { CONSUMER } from "./roles";

export class PROVIDER extends Role {

    constructor() {
        super();
        this.addParent(CONSUMER.name)
        this.addWriteRule([
            //update organization orders

            //create services in organization

        ])
        this.addReadRule([
            //same as consumer
            //view organization orders
            //
        ])
    }

}