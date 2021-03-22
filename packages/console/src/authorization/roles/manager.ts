import { Role, ruleGroup } from "@mechsoft/apigen";
import { updateOneOrganizationRules } from "../../models/mutationRuleslist";
import { PROVIDER } from "./provider";

export class MANAGER extends Role {

    constructor() {
        super();
        debugger
        this.addParent(PROVIDER.name)
        this.addWriteRule([
            //inherit provider
            //update organization   
            ...ruleGroup('updateOneOrganization', updateOneOrganizationRules, {
                exclude: [
                    // "where",
                    "data.id",
                    //"data.name",        
                    //"data.description",
                    "data.logo",
                    "data.services",
                    "data.orders",
                    "data.staffs",
                    "data.location",
                    "data.offers",
                    "data.ratings",
                    "data.createdAt",
                    "data.updatedAt",
                    "data.logoId",
                    "data.locationId",
                    "select.logo",
                    "select.services",
                    "select.orders",
                    "select.staffs",
                    "select.location",
                    "select.offers",
                    "select.ratings",

                ],
                include: [
                    //"data.offers",
                    "data.offers.connect.id",
                    "data.offers.disconnect.id",

                    // "data.location",
                    "data.location.create.id",
                    "data.location.create.name",
                    "data.location.create.latlon",

                    // "data.logo",
                    // "data.logo.create",
                    "data.logo.create.path",
                    "data.logo.create.mimetype",

                    // "data.staffs",
                    "data.staffs.connect",
                    "data.staffs.connect.id",
                    "data.staffs.connect.email",

                    //"select.logo",
                    "select.logo.id",
                    "select.logo.path",
                    "select.logo.mimetype",
                    // "select.services",    
                    // "select.orders",     
                    //  "select.staffs",
                    "select.staffs.id",
                    "select.staffs.displayName",
                    "select.staffs.role",
                    "select.staffs.state",
                    "select.staffs.email",
                    "select.staffs.phoneNumber",
                    "select.staffs.avator.id",
                    "select.staffs.avator.path",
                    "select.staffs.avator.mimetype",
                    //"select.location",
                    "select.location.id",
                    "select.location.name",
                    //select.offers
                    "select.offers.id",
                    "select.offers.name",
                    "select.offers.state"
                    //"select.ratings",
                ]
            }, true)

        ])
    }

}

const manager = new MANAGER()