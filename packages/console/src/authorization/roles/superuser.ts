import { Role } from "@mechsoft/apigen";
import { ANONYMOUS, MANAGER } from "./roles";

export class SUPERUSER extends Role {

    constructor() {
      super();
        this.addParent(MANAGER.name)
        this.addParent(ANONYMOUS.name)

     }

}