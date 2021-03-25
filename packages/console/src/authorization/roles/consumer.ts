import { Role, ruleGroup } from "@mechsoft/apigen";
import {
    createOneOrderRules,
    createOneOrganizationRules,
    createOneRatingRules,
    updateOneOrderRules,
    updateOneRatingRules,
    updateOneUserRules
} from "../../models/mutationRuleslist";
import {
    findManyOrderRules,
    findManyOrganizationRules,
    findManyServiceCategoryRules,
    findManyServiceRules,



    findUniqueOrderRules,



    findUniqueOrganizationRules,



    findUniqueServiceRules,



    findUniqueUserRules
} from "../../models/queriesRuleslist";


export class CONSUMER extends Role {

    constructor() {
        super();
        //  debugger;
        this.addWriteRule([
            /**
             *
             * update personal profile //add location to profile add avator
             *
             * */
            ...ruleGroup('updateOneUser', updateOneUserRules, {
                exclude: [
                    'where',
                    "data.id",
                    "data.email",
                    // "data.displayName",    
                    "data.phoneNumber",
                    "data.emailVerified",
                    "data.disabled",
                    "data.avator",
                    "data.role",
                    "data.state",
                    "data.orders",
                    "data.organizations",
                    "data.staffOf",
                    "data.ratings",
                    "data.location",
                    "data.createdAt",
                    "data.updatedAt",
                    "data.avatorId",
                    "data.locationId",
                    "select.avator",
                    //"select.role",          
                    // "select.state",          
                    "select.orders",
                    "select.organizations",
                    "select.ratings",
                    "select.location",
                    // "select.createdAt",     
                    // "select.updatedAt",     
                    "select.avatorId",
                    "select.locationId",
                    //staffof
                    'select.staffOf'

                ],
                include: [
                    // 'where',
                    'where.id',
                   // 'where.email',
                    //"data",
                    'data.displayName',
                    // 'data.avator',
                    'data.avator.connect',
                    'data.avator.connect.id',
                    //staffof leave organization
                    'data.staffOf.disconnect.id',
                    // 'data.avator.create',
                    'data.avator.create.path',
                    'data.avator.create.mimetype',
                    'data.avator.create.path',
                    //'data.location',
                    //'data.location.create',
                    'data.location.create.name',
                    'data.location.create.latlon',
                    // 'select',
                    // 'select.id',
                    // 'select.displayName',
                    'select.avator',
                    'select.avator.id',
                    'select.avator.path',
                    'select.avator.mimetype',
                    // 'select.location',
                    'select.location.id',
                    'select.location.name',
                    // 'select.organizations',
                    'select.organizations.id',
                    'select.organizations.name',
                    'select.organization.logo.id',
                    'select.organization.logo.path',
                    'select.organization.logo.mimetype',
                    //staffOF
                    'select.staffOf.id',
                    'select.staffOf.name',
                    'select.staffOf.logo.id',
                    'select.staffOf.logo.path',
                    'select.staffOf.logo.mimetype'

                ]
            }, true),

            /**
             *
             * create organization
             *
             * */
            ...ruleGroup('createOneOrganization', createOneOrganizationRules, {
                exclude: [
                    "data.id",
                    //"data.name",        
                    //"data.description",
                    "data.logo",
                    "data.services",
                    "data.orders",
                    "data.staffs",
                    "data.owner",
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
                    "select.owner"

                ],
                include: [
                    "data.owner.connect",
                    "data.owner.connect.id",
                    // "data.offers",
                    "data.offers.connect",
                    "data.offers.connect.id",

                  //  "data.location",
                  //  "data.location.create.id",
                    "data.location.create.name",
                    "data.location.create.latlon",

                   // "data.logo",
                   // "data.logo.create",
                    "data.logo.create.path",
                    "data.logo.create.mimetype",

                   // "data.staffs",
                   // "data.staffs.connect",
                    "data.staffs.connect.id",
                    "data.staffs.connect.email",

                    //"select.logo",
                    "select.logo.id",
                    "select.logo.path",
                    "select.logo.mimetype",
                    // "select.services",    
                    // "select.orders",     
                    "select.staffs",
                    "select.staffs.id",
                    "select.staffs.displayName",
                    "select.staffs.role",
                    "select.staffs.state",
                    "select.location",
                    "select.location.id",
                    "select.location.name",
                    // "select.offers", 
                    "select.offers.id",
                    "select.offers.name",
                    //"select.ratings",
                    // "select.owner",
                    "select.owner.id",
                    "select.owner.displayName",
                    "select.owner.role",
                    "select.owner.state",
                    "select.owner.avator.id",
                    "select.owner.avator.path",
                    "select.owner.avator.mimetype",
                ]
            }, true),

            /**
             *
             * create orders
             *
             * */
            ...ruleGroup('createOneOrder', createOneOrderRules, {
                exclude: [
                    "data.id",
                    "data.service",
                    "data.organization",
                    "data.owner",
                    "data.state",
                    "data.receipt",
                    "data.createdAt",
                    "data.updatedAt",
                    "data.serviceId",
                    "data.organizationId",
                    "data.ownerId",
                    "data.receiptId",

                    // "select.id",             
                    "select.service",
                    "select.organization",
                    "select.owner",
                    // "select.state",          
                    "select.receipt",
                    //"select.createdAt",      
                    //"select.updatedAt",     
                    "select.serviceId",
                    "select.organizationId",
                    "select.ownerId",
                    "select.receiptId",
                ],
                include: [
                    //"data.service",
                    "data.service.connect",
                    "data.service.connect.id",
                   // "data.organization",
                    "data.organization.connect",
                    "data.organization.connect.id",
                    // "data.owner",
                    "data.owner.connect",
                    "data.owner.connect.id",
                    //"data.state",          
                    //"data.receipt",
                    "select.service.id",
                    "select.service.name",
                    "select.service.price",
                    "select.service.description",
                    "select.service.state",
                   // 'select.service.image',
                    'select.service.image.id',
                    'select.service.image.path',
                    'select.service.image.mimetype',
                    "select.organization.id",
                    "select.organization.name",
                    "select.organization.description",
                   // "select.organization.logo",
                    "select.organization.logo.id",
                    "select.organization.logo.path",
                    "select.organization.logo.mimetype",
                  //  'select.organization.location',
                    'select.organization.location.id',
                    'select.organization.location.name',
                    'select.organization.location.latlon',
                    // 'select.owner',
                    'select.owner.id',
                    'select.owner.displayName',
                    'select.owner.avator.id',
                    'select.owner.avator.path',
                    'select.owner.location.id',
                    'select.owner.location.name'
                ]
            }, true),

            /**
             *
             * update order only (cancel/receive/submit)
             *
             * */
            ...ruleGroup('updateOneOrder', updateOneOrderRules, {
                exclude: [
                    "where",
                    "data.id",
                    "data.service",
                    "data.organization",
                    "data.owner",
                    //"data.state",          
                    "data.receipt",
                    "data.createdAt",
                    "data.updatedAt",
                    "data.serviceId",
                    "data.organizationId",
                    "data.ownerId",
                    "data.receiptId",

                    // "select.id",             
                    "select.service",
                    "select.organization",
                    "select.owner",
                    // "select.state",          
                    "select.receipt",
                    //"select.createdAt",      
                    //"select.updatedAt",     
                    "select.serviceId",
                    "select.organizationId",
                    "select.ownerId",
                    "select.receiptId",
                ],
                include: [
                  //  'where',
                    'where.id',

                    // "data.service",   
                    // "data.service.connect", 
                    //  "data.service.connect.id",      
                    // "data.organization", 
                    //   "data.organization.connect",
                    //   "data.organization.connect.id",  
                    //   "data.author",   
                    //   "data.author.connect",
                    //  "data.author.connect.id",      
                    //"data.state",          
                    //"data.receipt",
                    "select.service.id",
                    "select.service.name",
                    "select.service.price",
                    "select.service.description",
                    "select.service.state",
                    //'select.service.image',
                    'select.service.image.id',
                    'select.service.image.path',
                    'select.service.image.mimetype',
                    "select.organization.id",
                    "select.organization.name",
                    "select.organization.description",
                    //"select.organization.logo",
                    "select.organization.logo.id",
                    "select.organization.logo.path",
                    "select.organization.logo.mimetype",
                   // 'select.organization.location',
                    'select.organization.location.id',
                    'select.organization.location.name',
                    'select.organization.location.latlon',
                    // 'select.owner',
                    'select.owner.id',
                    'select.owner.displayName',
                    'select.owner.avator.id',
                    'select.owner.avator.path',
                    'select.owner.location.id',
                    'select.owner.location.name'
                ]
            }, true),

            /**
             *
             * create ratings
             *
             * */
            ...ruleGroup('createOneRating', createOneRatingRules, {
                exclude: [
                    "data.id",
                    "data.value",
                    "data.comment",
                    "data.organization",
                    "data.organizationId",
                    "data.owner",
                    "data.createdAt",
                    "data.updatedAt",
                    "data.authorId",

                    // "select.id",                   
                    // "select.value",         
                    // "select.comment",       
                    "select.organization",
                    "select.organizationId",
                    "select.owner",
                    //"select.createdAt",     
                    // "select.updatedAt",     
                    "select.ownerId"

                ],
                include: [
                   // 'data',
                    'data.value',
                    'data.comment',
                    // 'data.author',
                    'data.owner.connect.id',
                   // 'data.organization',
                    'data.organization.connect.id',
                    // 'select.id',
                    // 'select.value',
                    //'select.comment',
                    'select.owner.id',
                    'select.owner.displayName',
                    'select.owner.avator.id',
                    'select.owner.avator.path',
                    'select.owner.location.id',
                    'select.owner.location.name',
                    'select.organization.id',
                    'select.organization.name',
                    'select.organization.logo.id',
                    'select.organization.logo.path',
                    'select.organization.logo.mimetype',
                   // 'select.organization.ratings.value',
                ]
            }, true),

            /**
             * update on rating
             *
             * */
            ...ruleGroup('updateOneRating', updateOneRatingRules, {
                exclude: [
                    "where",
                    "data.id",
                    "data.value",
                    "data.comment",
                    "data.organization",
                    "data.organizationId",
                    "data.owner",
                    "data.createdAt",
                    "data.updatedAt",
                    "data.ownerId",

                    // "select.id",                   
                    // "select.value",         
                    // "select.comment",       
                    "select.organization",
                    "select.organizationId",
                    "select.owner",
                    //"select.createdAt",     
                    // "select.updatedAt",     
                    "select.ownerId"

                ],
                include: [
                   // "where",
                    "where.id",
                //    'data',
                    'data.value',
                    'data.comment',
                    //'data.author',
                    //'data.author.connect.id',
                    // 'data.organization',
                    //'data.organization.connect.id',
                    // 'select.id',
                    // 'select.value',
                    //'select.comment',
                    'select.owner.id',
                    'select.owner.displayName',
                    'select.owner.avator.id',
                    'select.owner.avator.path',
                    'select.owner.location.id',
                    'select.owner.location.name',
                    'select.organization.id',
                    'select.organization.name',
                    'select.organization.logo.id',
                    'select.organization.logo.path',
                    'select.organization.logo.mimetype',
                   // 'select.organization.ratings.value',
                ]
            })


            /**
             *
             * chat feature permissions
             *
             * */



        ]);

        this.addReadRule([
            /**
             *
             * view service categories
             *
             * */

            ...ruleGroup('findManyServiceCategory', findManyServiceCategoryRules, {
                exclude: [
                    'where',
                    'orderBy',
                    'distinct',
                    'select.organizations',
                    'select.services',
                    // 'select.state'
                ],
                include: [
                    'where.state',
                    'orderBy.name',
                    'orderBy.createdAt'
                ]
            }, true),

            //view public organizations profile

            ...ruleGroup('findManyOrganization', findManyOrganizationRules, {
                exclude: [
                    "where",
                    "orderBy",
                    // "select.id",         
                    //  "select.name",        
                    // "select.description", 
                    "select.logo",
                    "select.services",
                    "select.orders",
                    "select.staffs",
                    "select.location",
                    "select.offers",
                    "select.ratings",
                    "select.owner",
                    "select.ownerId",
                    "select.logoId",
                    "select.locationId",
                ],
                include: [
                    // "where.offers",
                    'where.offers.some.name.in',
                    'where.offers.some.id.in',
                    // 'where.location.name',
                    'where.location.name.mode',
                    'where.location.name.contains',
                    'where.AND.location.name.contains',
                    'where.AND.location.name.mode',
                    'where.AND.offers.some.name.in',
                    'where.AND.offers.some.name.notIn',

                    'orderBy.name',
                    'orderBy.createdAt',
                    // "select.logo", 
                    "select.logo.id",
                    "select.logo.path",
                    "select.logo.mimetype",
                    //"select.services",    
                    "select.services.id",
                    "select.services.name",
                    "select.services.price",
                    "select.services.description",
                    "select.services.createdAt",
                    //"select.orders",      
                   // "select.staffs",
                    "select.staffs.id",
                    "select.staffs.displayName",
                    "select.staffs.avator.id",
                    "select.staffs.avator.path",
                    "select.staffs.avator.mimetype",
                    // "select.location", 
                    "select.location.id",
                    "select.location.name",
                    //"select.offers", 
                    "select.offers.id",
                    "select.offers.name",
                    "select.offers.state",
                    // "select.ratings",
                    "select.ratings.id",
                    "select.ratings.value",
                    "select.ratings.comment",
                    // "select.ratings.author",
                    "select.ratings.owner.id",
                    "select.ratings.owner.displayName",
                    //"select.ratings.owner.avator",
                    "select.ratings.owner.avator.id",
                    "select.ratings.owner.avator.path",
                    "select.ratings.owner.avator.mimetype",
                    //owner
                    "select.owner.id",
                    "select.owner.displayName",
                    "select.owner.avator.id",
                    "select.owner.avator.path",
                    "select.owner.avator.mimetype",

                ]
            }, true),

            //view services public information
            ...ruleGroup('findManyService', findManyServiceRules, {
                exclude: [
                    'where',
                    'orderBy',
                    // "select.id",                
                    //  "select.name",             
                    //  "select.description",       
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
                    'where.organization.id',
                    'where.state',
                    'orderBy.name',
                    'orderBy.price',
                    'orderBy.createdAt',
                    'orderBy.createdAt',

                    'select.image.id',
                    'select.image.path',
                    'select.image.mimetype',
                    'select.organization.id',
                    'select.organization.name',
                    'select.organization.logo.id',
                    'select.organization.logo.path',
                    'select.organization.logo.mimetype',
                    'select.category.id',
                    'select.category.name',


                ]
            }, true),
            //view personal profile 
            ...ruleGroup('findUniqueUser', findUniqueUserRules, {
                exclude: [
                    "where",
                    "select.organizations",
                    "select.staffOf",
                    "select.ratings",
                    "select.orders",
                    "select.location",
                    "select.avator",
                    'select.avatorId',
                    'select.organizationId',
                    'select.locationId',
                ],
                include: [
                    "where.id",
                    "where.email",
                    'select.avator.id',
                    'select.avator.path',
                    'select.avator.mimetype',
                    'select.location.id',
                    'select.location.name',
                    'select.organization.id',
                    'select.organization.name',
                    'select.organization.logo.id',
                    'select.organization.logo.path',
                    'select.staffOf.id',
                    'select.staffOf.name',
                    'select.staffOf.logo.id',
                    'select.staffOf.logo.path',
                ]
            }, true),

            /**
             *
             * view personal orders
             *
             * */
            ...ruleGroup('findManyOrder', findManyOrderRules, {
                exclude: [
                    'where',
                    'orderBy',
                    // "select.id",             
                    "select.service",
                    "select.organization",
                    "select.owner",
                    // "select.state",          
                    "select.receipt",
                    //"select.createdAt",      
                    // "select.updatedAt",      
                    "select.serviceId",
                    "select.organizationId",
                    "select.ownerId",
                    "select.receiptId",

                ],
                include: [
                    'where.owner.id',
                    //'where.author.email',
                    'orderBy.createdAt',
                    'orderBy.updatedAt',
                    'orderBy.service.price',
                    "select.services.id",
                    "select.services.name",
                    "select.services.price",
                    "select.services.description",
                    "select.services.createdAt",
                    "select.services.updatedAt",
                    'select.organization.id',
                    'select.organization.name',
                    'select.organization.logo.id',
                    'select.organization.logo.path',
                    'select.owner.avator.id',
                    'select.owner.avator.path',
                    'select.owner.avator.mimetype',
                    'select.owner.location.id',
                    'select.owner.location.name', ,
                    'select.receipt.id',
                    'select.receipt.path',
                    'select.receipt.mimetype',
                    "select.receipt.createdAt",
                    "select.receipt.updatedAt",
                ]
            }, true),

            /**
             *
             * view a single service
             *
             * */
            ...ruleGroup('findUniqueService', findUniqueServiceRules, {
                exclude: [
                    // 'where',
                    // 'orderBy',
                    // "select.id",                
                    //  "select.name",             
                    //  "select.description",       
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
                    'where.id',
                    'orderBy.name',
                    'orderBy.price',
                    'orderBy.createdAt',
                    'orderBy.createdAt',

                    'select.image.id',
                    'select.image.path',
                    'select.image.mimetype',
                    'select.organization.id',
                    'select.organization.name',
                    'select.organization.logo.id',
                    'select.organization.logo.path',
                    'select.organization.logo.mimetype',
                    'select.category.id',
                    'select.category.name',
                ]
            }, true),

            /**
             *
             * view a single organization
             *
             * */
            ...ruleGroup('findUniqueOrganization', findUniqueOrganizationRules, {
                exclude: [
                    // "where",
                    //  "orderBy",
                    // "select.id",         
                    //  "select.name",        
                    "select.owner",
                    "select.logo",
                    "select.services",
                    "select.orders",
                    "select.staffs",
                    "select.location",
                    "select.offers",
                    "select.ratings",
                    // "select.createdAt",   
                    //  "select.updatedAt",   
                    "select.logoId",
                    "select.locationId",
                ],
                include: [

                    // "select.logo", 
                    "select.logo.id",
                    "select.logo.path",
                    "select.logo.mimetype",
                    //"select.services",    
                    "select.services.id",
                    "select.services.name",
                    "select.services.price",
                    "select.services.description",
                    "select.services.createdAt",
                    //"select.owner", 
                    "select.owner.id",
                    "select.owner.displayName",
                    "select.owner.avator.id",
                    "select.owner.avator.path",
                    "select.owner.avator.mimetype",
                   // "select.staffs",
                    "select.staffs.id",
                    "select.staffs.displayName",
                    "select.staffs.avator.id",
                    "select.staffs.avator.path",
                    "select.staffs.avator.mimetype",
                    // "select.location", 
                    "select.location.id",
                    "select.location.name",
                    //"select.offers", 
                    "select.offers.id",
                    "select.offers.name",
                    "select.offers.state",
                    // "select.ratings",
                    "select.ratings.id",
                    "select.ratings.value",
                    "select.ratings.comment",
                    // "select.ratings.author",
                    "select.ratings.owner.id",
                    "select.ratings.owner.displayName",
                    //"select.ratings.author.avator",
                    "select.ratings.owner.avator.id",
                    "select.ratings.owner.avator.path",
                    "select.ratings.owner.avator.mimetype",

                ]
            }, true),
            /**
             * view own single order
             *
             * */
            ...ruleGroup('findUniqueOrder', findUniqueOrderRules, {
                exclude: [
                    // 'where',
                    'orderBy',
                    // "select.id",             
                    "select.service",
                    "select.organization",
                    "select.owner",
                    // "select.state",          
                    "select.receipt",
                    //"select.createdAt",      
                    // "select.updatedAt",      
                    "select.serviceId",
                    "select.organizationId",
                    "select.userId",
                    "select.receiptId",

                ],
                include: [
                    // 'where.id',                    
                    'orderBy.createdAt',
                    'orderBy.updatedAt',
                    'orderBy.service.price',
                    "select.service.id",
                    "select.service.name",
                    "select.service.price",
                    "select.service.description",
                    "select.service.createdAt",
                    "select.service.updatedAt",
                    'select.organization.id',
                    'select.organization.name',
                    'select.organization.logo.id',
                    'select.organization.logo.path',
                    'select.owner.avator.id',
                    'select.owner.avator.path',
                    'select.owner.avator.mimetype',
                    'select.owner.location.id',
                    'select.owner.location.name', ,
                    'select.receipt.id',
                    'select.receipt.path',
                    'select.receipt.mimetype',
                    "select.receipt.createdAt",
                    "select.receipt.updatedAt",
                ]
            }, true)

        ])
    }

}


//const consumer = new CONSUMER();