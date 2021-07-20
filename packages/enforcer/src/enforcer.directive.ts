import { defaultFieldResolver, GraphQLField, GraphQLInputField, GraphQLScalarType } from "graphql";
import { SchemaDirectiveVisitor } from "graphql-tools";


export class EnforcerDirective extends SchemaDirectiveVisitor {
    visitInputFieldDefinition(field: GraphQLInputField) {

        //field.astNode
        //const { enforcer, auth } = this.context;
        this.wrapType(field)
    }
    visitFieldDefinition(field: GraphQLField<any, any>) {
        const { resolve = defaultFieldResolver } = field;
        field.resolve = async function (...args) {
            const result = await resolve.apply(this, args);
            if (typeof result === 'string') {
                return result.toUpperCase();
            }
            return result;
        };
    }
    // Replace field.type with a custom GraphQLScalarType that enforces the
    // length restriction.
    wrapType(field) {

        // if (
        //     field.type instanceof GraphQLNonNull &&
        //     field.type.ofType instanceof GraphQLScalarType
        // ) {
        //     field.type = new GraphQLNonNull(
        //         new AuthorizeType(field.type.ofType),
        //     );
        // } else if (field.type instanceof GraphQLScalarType) {
        //     field.type = new AuthorizeType(field);
        // } else {
        //     //throw new Error(`Not a scalar type: ${field.type}`);
        //     field.type = new AuthorizeType(field);
        // }
        field.type = new AuthorizeType(field, this.context);
    }
}

class AuthorizeType extends GraphQLScalarType {
    constructor(type, context) {
        super({
            name: `AuthorizedType`,

            // For more information about GraphQLScalar type (de)serialization,
            // see the graphql-js implementation:
            // https://github.com/graphql/graphql-js/blob/31ae8a8e8312/src/type/definition.js#L425-L446

            serialize(value) {
                
                // value = type.serialize(value);
                //enforce here
                const { enforcer, auth } = context;
                return value;
            },

            parseValue(value) {
                
                //enforce here
                //return type.parseValue(value);
                const { enforcer, auth } = context;
                return value;
            },

            parseLiteral(ast) {
                return type.parseLiteral(ast);
            },
        });
    }
}