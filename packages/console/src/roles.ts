import { Role, ruleGroup } from "@mechsoft/apigen";
import { MutationsRulesList } from './models/mutationRuleslist';
import { QueriesRulesList } from './models/queriesRuleslist';
import { MutationRules, QueriesRules } from "./models/rules";
export class ANONYMOUS extends Role<MutationRules, QueriesRules>{

    constructor() {
        super();

        this.addWriteRule([
            //create user account           
            ...ruleGroup<MutationRules>(MutationsRulesList, 'createOneUser', {
                exclude: [
                    'data.id',
                    'data.createdAt',
                    'data.updatedAt',
                    'data.avator',
                    'data.organization',
                    'data.service',
                    'data.order',
                    'data.rating',
                    'data.location',
                    'data.role',
                    'data.state',
                    'data.avatorId',
                    'data.organizationId',
                    'data.locationId',
                    'data.disabled',
                    'data.emailVerified',
                    'select.organization',
                    'select.order',
                    'select.location',
                    'select.avator',
                    'select.role',
                    'select.rating',
                    'select.email'

                ],
                include: [
                    'data.avator.create.path',
                    'data.location.create.name',
                    'data.location.create.latlon',
                    'select.avator.id',
                    'select.avator.path',
                    'select.avator.mimetype',
                    'select.location.id',
                    'select.location.name',

                ]
            }, true)
        ])
        this.addReadRule([
            //view service categories            
            ...ruleGroup<QueriesRules>(QueriesRulesList, 'findManyServiceCategory', {
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

export class CONSUMER extends Role<MutationRules, QueriesRules>{

    constructor() {
        super();
      //  debugger;
        this.addWriteRule([
            //create orders            
            ...ruleGroup<MutationRules>(MutationsRulesList,
                'createOneOrder', {
                exclude: [
                    'data.id',
                    'data.createdAt',
                    'data.updatedAt',
                    'data.service',
                    'data.organization',
                    'data.author',
                    'data.receipt',
                    'data.serviceId',
                    'data.organizationId',
                    'data.userId',
                    'data.receiptId',
                    'data.state',
                    'select.organization',
                    'select.service',
                    'select.author',
                    'select.receipt',
                    'select.organizationId',
                    'select.userId',
                    'select.receiptId',
                    'select.organizationId',
                    'select.userId',
                    'select.receiptId'
                ],
                include: [
                    'data.service.connect.id',
                    'data.organization.connect.id',
                    'data.author.connect.id',
                    'select.organization.id',
                    'select.organization.name',
                    'select.organization.logo.id',
                    'select.organization.logo.path',
                    'select.organization.logo.mimetype',
                    'select.organization.location.id',
                    'select.organization.location.name',
                    'select.organization.location.latlon',
                    'select.author.id',
                    'select.author.displayName',
                    'select.author.avator.id',
                    'select.author.avator.path',
                    'select.author.location.id',
                    'select.author.location.name',
                    'select.service.id',
                    'select.service.name',
                    'select.service.price',
                    'select.service.description',
                    'select.service.image.id',
                    'select.service.image.path',
                    'select.service.location.id',
                    'select.service.location.name',
                    'select.service.location.latlon',

                ]
            }, true),

            //create ratings
            ...ruleGroup<MutationRules>(MutationsRulesList, 'createOneRating', {
                exclude: [
                    'data.id',
                    'data.createdAt',
                    'data.updatedAt',
                    'data.organization',
                    'data.organizationId',
                    'data.author',
                    'data.authorId',
                    'select.organization',
                    'select.author',
                    'select.authorId',
                    'select.organizationId'

                ],
                include: [
                    'data.value',
                    'data.comment',
                    'data.author.connect.id',
                    'data.organization.connect.id',
                    // 'select.id',
                    // 'select.value',
                    //'select.comment',
                    'select.author.id',
                    'select.author.displayName',
                    'select.author.avator.id',
                    'select.author.avator.path',
                    'select.author.location.id',
                    'select.author.location.name',
                    'select.organization.id',
                    'select.organization.name',
                    'select.organization.logo.id',
                    'select.organization.logo.path',
                    'select.organization.logo.mimetype',
                    'select.organization.ratings.value',
                ]
            }, true),

            //update personal profile //add location to profile
            ...ruleGroup<MutationRules>(MutationsRulesList, 'updateOneUser', {
                exclude: [
                    'where',
                    'data.id',
                    'data.createdAt',
                    'data.updatedAt',
                    'data.avator',
                    'data.organization',
                    'data.service',
                    'data.order',
                    'data.rating',
                    'data.location',
                    'data.role',
                    'data.state',
                    'data.avatorId',
                    'data.organizationId',
                    'data.locationId',
                    'data.disabled',
                    'data.emailVerified',
                    'select.organization',
                    'select.order',
                    'select.location',
                    'select.avator',
                    'select.role',
                    'select.rating',
                    'select.email'

                ],
                include: [
                    'where.id',
                    'data.displayName',
                    'data.avator.connect.id',
                    'data.avator.create.path',
                    'data.avator.create.mimetype',
                    'data.location.create.name',
                    'select.id',
                    'select.displayName',
                    'select.avator.id',
                    'select.avator.path',
                    'select.avator.mimetype',
                    'data.avator.create.path',
                    'data.location.create.name',
                    'data.location.create.latlon',
                    'select.avator.id',
                    'select.avator.path',
                    'select.avator.mimetype',
                    'select.location.id',
                    'select.location.name',
                    'select.organization.id',
                    'select.organization.name'

                ]
            }),

            //create organization
            ...ruleGroup<MutationRules>(MutationsRulesList, 'createOneOrganization', {
                exclude: [
                    'data.id',
                    'data.createdAt',
                    'data.updatedAt',
                    'data.logoId',
                    'data.locationId',
                    'data.ratings',
                    'data.offers',
                    'data.location',
                    'data.staffs',
                    'data.orders',
                    'data.services',
                    'data.logo',
                    'select.logoId',
                    'select.locationId',
                    'select.ratings',
                    'select.offers',
                    'select.location',
                    'select.staffs',
                    'select.orders',
                    'select.services',
                    'select.logo',

                ],
                include: [
                    'data.location.create.name',
                    'data.location.create.latlon',
                    'data.staffs.connect.id',
                    'data.offers.connect.id',
                    'data.logo.create.path',
                    'select.location.id',
                    'select.location.name',
                    //'select.location.latlon',
                    'select.staffs.id',
                     'select.staffs.displayName',
                     'select.staffs.avator.id',
                     'select.staffs.avator.path',
                     'select.logo.id',
                     'select.logo.path',
                     'select.offers.id',
                     'select.offers.name',
                    // 'select.ratings.comments',                     
                   //  'select.ratings.id',
                   //  'select.ratings.value',
                    // 'select.ratings.comments'
                ]
            },true)
        ])
        this.addReadRule([
            //view service categories            
            
            ...ruleGroup<QueriesRules>(QueriesRulesList, 'findManyServiceCategory', {
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
            }, true),
            //view public organizations profile
           
            ...ruleGroup<QueriesRules>(QueriesRulesList,'findManyOrganization',{
                exclude:[
                    'where',
                    'orderBy',
                    'select.logo',
                    'select.services',
                    'select.orders',
                    'select.staffs',
                    'select.location',
                    'select.offers',
                    'select.ratings',
                    'select.logId',
                    'select.locationId'
                ],
                include:[

                    'where.offers.some.name',
                    'where.offers.some.id',
                    'where.location.name',
                    'where.ratings.every.value.gte',
                    'orderBy.name',
                    'orderBy.createdAt',
                    'select.logo.id',
                    'select.logo.path',
                    'select.logo.mimetype',
                    'select.offers.id',
                    'select.offers.name',
                    'select.location.id',
                    'select.location.name',
                    'select.services.id',
                    'select.services.price',
                    'select.services.description',
                    'select.services.image.id',
                    'select.services.image.path',
                    'select.services.image.mimetype',
                ]
            },true),

            //view services public information
           
 ...ruleGroup<QueriesRules>(QueriesRulesList,'findManyService',{
                 exclude:[
                     'where',
                     'orderBy',
                     'select.organization',
                     'select.image',
                     'select.category',
                     'select.orders',
                     'select.organizationId',
                     'select.imageId',
                     'select.serviceCategoryId'

                 ],
                 include:[
                   // 'where.serviceCategoryId',
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
             },true),
            //view personal profile 
            ...ruleGroup<QueriesRules>(QueriesRulesList,'findOneUser',{
                exclude:[
                   // 'where',
                    'select.organization',
                     'select.avator',
                     'select.orders',
                     'ratings',
                     'select.location',
                     'select.avatorId',
                     'select.organizationId',
                     'select.locationId',
                     'select.email',
                     'select.phoneNumber',
                     'select.disabled',
                     'select.role',
                     'select.emailVerified',
                     'select.state'
                ],
                include:[
                    'select.organization.id',
                    'select.organization.name',
                    'select.organization.logo.id',
                    'select.organization.logo.path',
                     'select.avator.id',
                     'select.avator.path',
                   //  'select.location.id',
                     //'select.location.name',
                ]
            },true),
            //view personal orders
            ...ruleGroup<QueriesRules>(QueriesRulesList,'findManyOrders',{
                exclude:[
                    'where',
                    'select.service',
                    'select.organization',
                    'select.author',
                    'select.serviceId',
                    'select.organizationId',
                    'select.userId',
                    'select.receiptId',
                    'select.receipt',
                ],
                include:[
                    'where.id',
                    'select.author.id',
                    'select.author.displayName',
                    'select.author.avator.id',
                    'select.author.avator.path',
                    'select.organization.id',
                    'select.organization.name',
                    'select.organization.logo.id',
                    'select.organization.logo.path',
                    'select.service.id',
                    'select.service.name',
                    'select.service.price',
                    'select.receipt.id',
                    'select.receipt.path',
                ]
            },true)

        ])
    }

}

export class PROVIDER extends Role<MutationRules, QueriesRules>{

    constructor() {
        super();
        this.addParent(new CONSUMER())
        this.addWriteRule([
            //update organization orders

            //create services in organization

        ])
        this.addReadRule([
            //same as consumer
            //view organization orders
            //
        ])
    }

}

export class MANAGER extends Role<MutationRules, QueriesRules>{

    constructor() {
        super();
        this.addParent(new PROVIDER())
        this.addWriteRule([
            //inherit provider
            //update organization            

        ])
    }

}

export class SUPERUSER extends Role<MutationRules, QueriesRules>{

    constructor() {
        super();
        this.addParent(new MANAGER())
        this.addParent(new ANONYMOUS())
        this.addWriteRule([
            //inherit all
            //delete anything            

        ])
    }

}

//const anony = new CONSUMER()