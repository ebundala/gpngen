import { Role, ruleGroup } from "@mechsoft/apigen";
import { findManyOrderRules, findUniqueOrganizationRules } from "../../models/queriesRuleslist";
import { createOneServiceRules, updateOneOrderRules, updateOneServiceRules } from "../../models/mutationRuleslist";
import { CONSUMER } from "./consumer";

export class PROVIDER extends Role {

    constructor() {
        super()
     //   debugger;
        this.addParent(CONSUMER.name)
        this.addWriteRule([
            /** 
             * 
             *  update orders for organization 
             * 
             * */
            ...ruleGroup('updateOneOrder.data', updateOneOrderRules, {
                extensions: [
                   // "state",
                    "state.set",
                    "receipt.connect.id",
                    "receipt.disconnect.id"
                ]
            }),
            /** 
             * create services for organization 
             * 
             * */
            ...ruleGroup("createOneService", createOneServiceRules, {
                exclude: [
                    "data",
                    // "select.id",                
                    // "select.name",              
                    // "select.description",       
                    //  "select.price",          
                    //  "select.state",             
                    "select.organization",
                    "select.image",
                    "select.category",
                    "select.orders",
                    // "select.createdAt",
                    //  "select.updatedAt",
                    "select.organizationId",
                    "select.imageId",
                    "select.serviceCategoryId",

                ],
                include: [
                    "data.name",
                    "data.description",
                    "data.price",
                    "data.organization.connect.id",
                    "data.image.connect.id",
                    "select.organization.id",
                    "select.organization.name",
                    "select.organization.description",
                    "select.organization.logo.id",
                    "select.organization.logo.path",
                    "select.organization.logo.mimetype",
                    'select.organization.location.id',
                    'select.organization.location.name',
                    'select.organization.location.latlon',
                    "select.image.id",
                    "select.image.path",
                    "select.image.mimetype",
                    "select.category.id",
                    "select.category.name",
                    // "select.orders",
                    // "select.createdAt",
                    //  "select.updatedAt",
                ]
            }, true),

            /**
             * 
             *   update service for organization 
             * 
             * */
            ...ruleGroup("updateOneService", updateOneServiceRules, {
                exclude: [
                    "data",
                    // "select.id",                
                    // "select.name",              
                    // "select.description",       
                    //  "select.price",          
                    //  "select.state",             
                    "select.organization",
                    "select.image",
                    "select.category",
                    "select.orders",
                    // "select.createdAt",
                    //  "select.updatedAt",
                    "select.organizationId",
                    "select.imageId",
                    "select.serviceCategoryId",

                ],
                include: [
                    "data.name",
                    "data.description",
                    "data.price",
                    "data.organization.connect.id",
                    "data.image.connect.id",
                             
                    "select.organization.id",
                    "select.organization.name",
                    "select.organization.description",
                    "select.organization.logo.id",
                    "select.organization.logo.path",
                    "select.organization.logo.mimetype",
                    'select.organization.location.id',
                    'select.organization.location.name',
                    'select.organization.location.latlon',
                    "select.image.id",
                    "select.image.path",
                    "select.image.mimetype",
                    "select.category.id",
                    "select.category.name",
                    // "select.orders",
                    // "select.createdAt",
                    //  "select.updatedAt",
                ]
            }, true)
        ])
        this.addReadRule([
            //same as consumer
            /**
             * 
             *  view organization with its orders 
             * 
             * */
            ...ruleGroup("findUniqueOrganization.select.orders", findUniqueOrganizationRules, {
                exclude: [
                    "id",
                    // "quantity",      
                    "service",
                    "organization",
                    "owner",
                    // "state",          
                    "receipt",
                    // "createdAt",      
                    // "updatedAt",      
                    "serviceId",
                    "organizationId",
                    "ownerId",
                    "receiptId",
                ],
                include: [
                    "service.id",
                    "service.name",
                    "service.price",
                    "service.description",
                    "service.createdAt",
                    "service.updatedAt",
                    'organization.id',
                    'organization.name',
                    'organization.logo.id',
                    'organization.logo.path',
                    'owner.id',
                    'owner.displayName',
                    'owner.email',
                    'owner.phoneNUmber',
                    'owner.state',
                    'owner.avator.id',
                    'owner.avator.path',
                    'owner.avator.mimetype',
                    'owner.location.id',
                    'owner.location.name', ,
                    'receipt.id',
                    'receipt.path',
                    'receipt.mimetype',
                    "receipt.createdAt",
                    "receipt.updatedAt",
                ]
            }, true),

            /**
             * 
             * find many orders for organization
             */
            ...ruleGroup("findManyOrder.where", findManyOrderRules, {
                extensions: [
                    'organization.id'
                ]
            })
        ])
        /**
         *
         *  FOR DEBUG ONLY
         *
         * */
        // const consumer = new CONSUMER();
        // this.readRules.unshift(...consumer.readRules);
        // this.writeRules.unshift(...consumer.writeRules);
    }

}

//const provider = new PROVIDER();