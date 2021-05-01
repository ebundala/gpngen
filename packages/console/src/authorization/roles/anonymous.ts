import { Role, } from "@mechsoft/apigen";
import { join } from "path";
import { getRulesFromFile } from '@mechsoft/enforcer';

export class ANONYMOUS extends Role {
    constructor() {
        super();
        const dir = join(process.cwd(), 'src/authorization/policy')
        this.rules = getRulesFromFile(join(dir, 'anonymous.policy.graphql'), ANONYMOUS.name)

    }



}

