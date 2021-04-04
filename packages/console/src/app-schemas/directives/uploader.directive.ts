import {
    GraphQLInputField, GraphQLScalarType, GraphQLNonNull
} from "graphql";
import { SchemaDirectiveVisitor, } from "graphql-tools";
import { FileUpload } from '@apollographql/graphql-upload-8-fork'
import { IResolverOptions } from "apollo-server-express";
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


    wrapType(field: GraphQLInputField) {
        debugger
        if (field["_fieldWrapped"]) return field;
        field["_fieldWrapped"] = true;
        const p = new Upload(this.args?.path);
        
        field.type = new GraphQLNonNull(p);
       // field['_path']=this.args?.path
        return field;
    }

}

export class Upload extends GraphQLScalarType {
    private readonly _path: string
    constructor(path?: string) {
        super({
            name: 'Upload',
            description: 'The `Upload` scalar type represents a file upload.',
            parseValue: (file: Promise<FileUpload>) => {
                
                return { file, path: this._path }
            },
            parseLiteral() {
                throw new Error('‘Upload’ scalar literal unsupported.')
            },

            serialize() {
                throw new Error('‘Upload’ scalar serialization unsupported.')
            }
        });
        this._path = path;
    }
}
export const UploadTypeResolver: IResolverOptions = {
    __resolveType: () => Upload.name,
    resolve: (_, args, ctx) => new Upload(args),
}
