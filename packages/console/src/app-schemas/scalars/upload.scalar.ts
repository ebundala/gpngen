import { Scalar, CustomScalar } from '@nestjs/graphql';
import { GraphQLScalarType, Kind, ValueNode } from 'graphql';
import { FileUpload } from 'graphql-upload'

@Scalar('Upload')
export class Upload implements CustomScalar<{ file: Promise<FileUpload>, path: string }, any>{
    description: "A scalar for uploading files"
    private _path: string
    constructor() {
        //  this._path = path;
    }
    parseValue(file: Promise<FileUpload>) {

        return { file, path: this._path }
    }
    parseLiteral() {
        throw new Error('‘Upload’ scalar literal unsupported.')
    }

    serialize() {
        throw new Error('‘Upload’ scalar serialization unsupported.')
        return null
    }

}
