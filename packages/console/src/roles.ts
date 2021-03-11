import { Role } from "@mechsoft/apigen";
import { MutationRules, QueriesRules } from "./models/rules";

export class Viewer extends Role<MutationRules, QueriesRules>{
    constructor(){
        super();
        this.addReadRule([
            //tenant
            'findUniqueTenant',
            'findUniqueTenant.where',
            'findUniqueTenant.where.id',
            
            'findManyTenant',
            'findManyTenant.where',
            'findManyTenant.where.id',
            'findManyTenant.where.url',
            'findManyTenant.where.name',
            'findManyTenant.where.name.mode',

            'findFirstTenant',
            'findFirstTenant.where',
            'findFirstTenant.where.id',
            'findFirstTenant.where.url',
            'findFirstTenant.where.name',
            'findFirstTenant.where.name.mode',
        ]);
    }
    
    

}

export class Editor extends Role<MutationRules, QueriesRules>{

    constructor(){
        super();
        this.addParent(new Viewer())
        this.addWriteRule([
            'createOneTenant',
            'createOneTenant.data',
          //  'createOneTenant.data.id',
            'createOneTenant.data.name',
            'createOneTenant.data.url',
            'createOneUser.data.comments.create.content',

        ])
    }
    
}

export class Admin extends Role<MutationRules, QueriesRules>{

    constructor(){
        super();
        this.addParent(new Editor())
        this.addWriteRule([
            //user
            'createOneUser',
            'createOneUser.data',
            'createOneUser.data.email',
            'createOneUser.data.displayName',
            'updateOneUser',
            'updateOneUser.data',
            'updateOneUser.data.email',
            'updateOneUser.data.displayName',
            'updateOneUser.data.comments',
            'updateOneUser.data.comments.create',
            'updateOneUser.data.comments.create.content',
        ])
    }
    
}
