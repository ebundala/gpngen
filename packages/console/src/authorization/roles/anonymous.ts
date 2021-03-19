import { Role, ruleGroup } from "@mechsoft/apigen";
import { QueriesRulesList } from "../../models/queriesRuleslist";

export class ANONYMOUS extends Role {
    constructor() {
        super();
       // this.addWriteRule([
            //create user account           
       // ])
        this.addReadRule([
            //view service categories            
            ...ruleGroup('findManyServiceCategory', QueriesRulesList, {
                exclude: [
                    'where',
                    'orderBy',
                    'distinct',
                    'select.organizations',
                    'select.services',
                    'select.state'
                ],
                include: [
                    'where.state',
                    'orderBy.name',
                    'orderBy.createdAt'
                ]
            }, true)


        ]);
    }



}

