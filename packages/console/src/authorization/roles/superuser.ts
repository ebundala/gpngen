import { Role, ruleGroup } from "@mechsoft/apigen";
import { createOneUserRules, deleteOneUserRules } from "../../models/mutationRuleslist";
import { ANONYMOUS, MANAGER } from "./roles";

export class SUPERUSER extends Role {

    constructor() {
        super();
        debugger;
        this.addParent(MANAGER.name)
        this.addParent(ANONYMOUS.name)
        this.addWriteRule([
            //inherit all
            //delete anything  
            ...ruleGroup( 'createOneUser',createOneUserRules, {
                exclude: [
                   // 'data.id',
                    'data.createdAt',
                    'data.updatedAt',
                    'data.avator',
                    'data.organization',
                    'data.service',
                    'data.order',
                    'data.rating',
                    'data.location',
                    // 'data.role',
                    // 'data.state',
                    'data.avatorId',
                    'data.organizationId',
                    'data.locationId',
                    //  'data.disabled',
                    //  'data.emailVerified',
                    'select.organization',
                    'select.order',
                    'select.location',
                    'select.avator',
                    // 'select.role',
                    'select.rating',
                    // 'select.email'

                ],
                include: [
                    'data.avator.create.path',
                    'data.location.create.name',
                    //'data.location.create.latlon',
                    //'data.avator.create.path',
                    'select.avator.id',
                    'select.avator.path',
                    'select.avator.mimetype',
                    'select.location.id',
                    'select.location.name',

                ]
            }, true),
            ...ruleGroup( 'deleteOneUser',deleteOneUserRules, {
                exclude: [
                    'select.organization',
                    'select.order',
                    'select.location',
                    'select.avator',
                    'select.ratings'
                ],
                include: []
            },
                true)

        ]);

        this.addReadRule([
            //read unique user by email
            
        ])
    }

}