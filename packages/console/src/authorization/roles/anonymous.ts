import { Role, } from "@mechsoft/apigen";
import { join } from "path";
import { getRulesFromFile } from "../policy/rule.ast";

export class ANONYMOUS extends Role {
    constructor() {
        super();
        const dir = join(process.cwd(), 'packages/console/src/authorization/policy')
        this.rules = getRulesFromFile(join(dir, 'anonymous.policy.graphql'), ANONYMOUS.name)

    }



}

