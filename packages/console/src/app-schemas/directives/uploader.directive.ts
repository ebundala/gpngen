import {
    defaultFieldResolver,
    GraphQLObjectType,
    GraphQLInputObjectType, GraphQLField, GraphQLInputField, GraphQLScalarType
} from "graphql";
import { SchemaDirectiveVisitor, } from "graphql-tools";
import { GraphQLUpload, FileUpload } from '@apollographql/graphql-upload-8-fork'

export class UploadDirective extends SchemaDirectiveVisitor {
    visitInputFieldDefinition(field: GraphQLInputField) {
        debugger


        return this.wrapType(field)


    }

    // visitObject(object: GraphQLObjectType) {
    //     debugger



    // }

    // visitInputObject(object: GraphQLInputObjectType) {
    //     debugger
    //     // if (object["_FieldsWrapped"]) return;
    //     // object["_FieldsWrapped"] = true;


    //     // const fields = object.getFields();

    //     // this.wrapType(fields["path"]);
    // }
    // visitFieldDefinition(field: GraphQLField<any, any>) {
    //     debugger
    //     const { resolve = defaultFieldResolver } = field;
    //     field.resolve = async function (...args) {
    //         const result = await resolve.apply(this, args);
    //         if (typeof result === 'string') {
    //             return result.toUpperCase();
    //         }
    //         return result;
    //     };
    // }


    wrapType(field) {

        debugger
        if (field["_fieldWrapped"]) return field;
        field["_fieldWrapped"] = true;
        field.type = new Upload();


        return field;
    }
}

class Upload extends GraphQLScalarType {
    constructor() {
        super({
            name: 'Upload',
            description: 'The `Upload` scalar type represents a file upload.',
            parseValue(value: FileUpload) {
                debugger
                const { filename,
                    mimetype,
                    encoding,
                    createReadStream } = value;
                if (!createReadStream) {
                    throw new Error('Invalid upload stream')

                }
                const st = createReadStream();
                debugger
                return value + "mmmmm";
            },

            parseLiteral() {
                throw new Error('‘Upload’ scalar literal unsupported.')
            },

            serialize() {
                throw new Error('‘Upload’ scalar serialization unsupported.')
            }
        })
    }
}

class UploadType extends GraphQLScalarType {
    constructor(type, context) {
        super({
            name: `Upload`,

            // For more information about GraphQLScalar type (de)serialization,
            // see the graphql-js implementation:
            // https://github.com/graphql/graphql-js/blob/31ae8a8e8312/src/type/definition.js#L425-L446

            serialize(value) {
                debugger;
                // value = type.serialize(value);
                //enforce here
                const { enforcer, auth } = context;
                return value;
            },

            parseValue(value) {
                debugger
                //enforce here
                //return type.parseValue(value);
                const { enforcer, auth } = context;
                return value;
            },
            parseLiteral(ast) {
                debugger
                return type.parseLiteral(ast);
            },
        });
    }
}