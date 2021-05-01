import { Role, ruleGroup } from "@mechsoft/apigen";
import { join } from "path";
import { getRulesFromFile } from '@mechsoft/enforcer';



export class CONSUMER extends Role {

    constructor() {
        super();
        //  debugger;
        const dir = join(process.cwd(), 'src/authorization/policy')
        this.rules = getRulesFromFile(join(dir, 'consumer.policy.graphql'), CONSUMER.name)

       
    }

}


