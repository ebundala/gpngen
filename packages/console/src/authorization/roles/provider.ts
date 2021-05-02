import { CONSUMER } from "./consumer";
import { join } from "path";
import { getRulesFromFile } from '@mechsoft/enforcer';
import { Role } from "@mechsoft/apigen";

export class PROVIDER extends Role {

    constructor() {
        super()
        this.addParent(CONSUMER.name)
        const dir = join(process.cwd(), 'src/authorization/policy')
        this.rules = getRulesFromFile(join(dir, 'provider.policy.graphql'), PROVIDER.name)

        
    }

}

