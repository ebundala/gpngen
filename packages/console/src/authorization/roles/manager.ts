import { join } from "path";
import { getRulesFromFile } from '@mechsoft/enforcer';
import { PROVIDER } from "./provider";
import { Role } from "@mechsoft/apigen";

export class MANAGER extends Role {

    constructor() {
        super();
        //inherit provider
        this.addParent(PROVIDER.name)
        const dir = join(process.cwd(), 'src/authorization/policy')
        this.rules = getRulesFromFile(join(dir, 'manager.policy.graphql'), MANAGER.name)


    }

}

const manager = new MANAGER()