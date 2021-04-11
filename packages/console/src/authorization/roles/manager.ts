import { Role } from "@mechsoft/apigen";
import { join } from "path";
import { getRulesFromFile } from "../policy/rule.ast";
import { PROVIDER } from "./provider";

export class MANAGER extends Role {

    constructor() {
        super();
        //debugger
        //inherit provider
        this.addParent(PROVIDER.name)
        const dir = join(process.cwd(), 'packages/console/src/authorization/policy')
        this.rules = getRulesFromFile(join(dir, 'manager.policy.graphql'), MANAGER.name)
        
        // this.addWriteRule([
        //     /**
        //      *
        //      * update organization
        //      *
        //      * */
        //     ...ruleGroup('updateOneOrganization', updateOneOrganizationRules, {
        //         exclude: [
        //             // "where",
        //             "data.id",
        //             //"data.name",        
        //             //"data.description",
        //             "data.owner",
        //             "data.logo",
        //             "data.services",
        //             "data.orders",
        //             "data.staffs",
        //             "data.location",
        //             "data.offers",
        //             "data.ratings",
        //             "data.createdAt",
        //             "data.updatedAt",
        //             "data.logoId",
        //             "data.locationId",
        //             "select.logo",
        //             "select.services",
        //             "select.orders",
        //             "select.staffs",
        //             "select.location",
        //             "select.offers",
        //             "select.ratings",
        //             "select.owner"

        //         ],
        //         include: [
        //             //"data.offers",
        //             "data.offers.connect.id",
        //             "data.offers.disconnect.id",

        //             // "data.location",
        //             "data.location.create.id",
        //             "data.location.create.name",
        //             "data.location.create.latlon",

        //             // "data.logo",
        //             // "data.logo.create",
        //             "data.logo.create.path",
        //             "data.logo.create.mimetype",

        //             // "data.staffs",
        //             "data.staffs.connect",
        //             "data.staffs.connect.id",
        //             "data.staffs.connect.email",

        //             //"select.logo",
        //             "select.logo.id",
        //             "select.logo.path",
        //             "select.logo.mimetype",
        //             // "select.services",    
        //             // "select.orders",     
        //             //  "select.staffs",
        //             "select.staffs.id",
        //             "select.staffs.displayName",
        //             "select.staffs.role",
        //             "select.staffs.state",
        //             "select.staffs.email",
        //             "select.staffs.phoneNumber",
        //             "select.staffs.avator.id",
        //             "select.staffs.avator.path",
        //             "select.staffs.avator.mimetype",
        //             //"select.location",
        //             "select.location.id",
        //             "select.location.name",
        //             //select.offers
        //             "select.offers.id",
        //             "select.offers.name",
        //             "select.offers.state",
        //             //"select.ratings",
        //             "select.owner.id",
        //             "select.owner.displayName",
        //             "select.owner.role",
        //             "select.owner.state",
        //             "select.owner.email",
        //             "select.owner.phoneNumber",
        //             "select.owner.avator.id",
        //             "select.owner.avator.path",
        //             "select.owner.avator.mimetype",
        //         ]
        //     }, true)

        // ])
    }

}

const manager = new MANAGER()