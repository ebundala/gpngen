import { IResolverOptions } from "apollo-server-express";
import {
    GraphQLInputField, GraphQLScalarType, GraphQLNonNull, GraphQLField
} from "graphql";
import { SchemaDirectiveVisitor, } from "graphql-tools";

export class ThumbnailDirective extends SchemaDirectiveVisitor {
    // visitInputFieldDefinition(field: GraphQLInputField) {
    //     

    //     return this.wrapType(field)


    // }

    // visitObject(object: GraphQLObjectType) {
    //     



    // }

    // visitInputObject(object: GraphQLInputObjectType) {
    //     
    //     // if (object["_FieldsWrapped"]) return;
    //     // object["_FieldsWrapped"] = true;


    //     // const fields = object.getFields();

    //     // this.wrapType(fields["path"]);
    // }
   // visitFieldDefinition(field: GraphQLField<any, any>) {
    //     
    //     const { resolve = defaultFieldResolver } = field as any;
    //     field.resolve = async function (...args) {
    //         const result = await resolve.apply(this, args);
    //         if (typeof result === 'string') {
    //             return result.toUpperCase();
    //         }
    //         return result;
    //     };
    // }
    


}