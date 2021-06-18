import * as fs from 'fs'
import * as mime from 'mime-types';
import { join } from 'path';
import { AttachmentType } from 'src/models/graphql';
import { GraphQLUpload, FileUpload } from '@apollographql/graphql-upload-8-fork'
import * as sharp from 'sharp';
import { v4 as uuidv4 } from 'uuid';
import { getAudioDurationInSeconds } from 'get-audio-duration'
import { mkdrIfNotExist } from '@mechsoft/apigen';

export const resizer = (rs: fs.ReadStream, ws: fs.WriteStream) => {
    const st = sharp()
        .resize({
            width: 480,
            height: 480,
            fit: sharp.fit.cover,
            position: sharp.strategy.entropy
        }).webp();
    const onError = (e) => {


        rs.emit("error", e);
        ws.emit("error", e);

    }
    st.on('error', onError.bind(this));
    return st;
}
export const writeStreamToFile = (rs: fs.ReadStream, path: string, type: AttachmentType) => new Promise((resolve, reject) => {
    const ws = fs.createWriteStream(path);
    const onError = (e) => {
        ws.close();
        rs.close();

        reject(e)

    }
    rs.on('error', onError.bind(this));
    ws.on('error', onError.bind(this));
    ws.on('finish', () => {
        const size = ws.bytesWritten;
        ws.close();
        resolve({ path, size });
    });
    if (type == AttachmentType.IMAGE) {
        rs.pipe(resizer(rs, ws)).pipe(ws);
    } else {
        rs.pipe(ws);
    }
});
export const uploadFile = async (file: Promise<FileUpload>, path: string = '../../public/uploads',
    metadata?: any, uid?: String): Promise<any> => {
    const {
        createReadStream,
        filename, mimetype, encoding,
    } = await file;

    if (!createReadStream) {
        return await Promise.resolve(undefined);
    }
    const stream = createReadStream()

    const uuid = uuidv4();
    let [type, subtype] = mimetype.split("/");
    let ext = mime.extension(mimetype);

    if (ext === "bin" || !ext || ext === 'mpga' || type == 'image') {
        switch (type) {
            case "image":
                ext = "webp"
                break;
            case "video":
                ext = "mp4"
                break;
            case "audio":
                ext = "mp3"
                break;
            case "text":
                ext = "txt"
                break;
            default:
                ext = "bin";
                break;
        }
    }
    let t: AttachmentType;
    switch (type) {
        case "application":
            //TODO handle more documents types
            if (subtype === 'pdf') {
                t = AttachmentType.DOCUMENT
                break;

            }
            break
        case "text":
            t = AttachmentType.DOCUMENT
            break;
        case "audio":
            t = AttachmentType.AUDIO
            break;
        case "video":
            t = AttachmentType.VIDEO
            break;
        case "image":
            t = AttachmentType.IMAGE
            break;
        default:
            throw new Error("Unsupported file type")
    }
    const fname = `${uuid}.${ext}`;
    const p1 = join(__dirname, path);
    mkdrIfNotExist(p1);
    const p = join(p1, fname);

    const options = {
        encoding: encoding as BufferEncoding,
    }

    return writeStreamToFile(stream, p, t)
        .then(async (r: { path: string, size: number }) => {
            let duration = 0
            let size = r.size || 0;
            if (metadata) {
                size = size || metadata.size;
            }
            if (t === AttachmentType.AUDIO) {

                if (metadata && !metadata.duration || !metadata) {
                    duration = await getAudioDurationInSeconds(p);
                } else if (metadata && metadata.duration) {
                    duration = metadata.duration;
                } else {
                    duration = 0;
                }
            }
            const url = `${path}/${fname}`.replace(/(\.\.\/)|public\//g, '');
            return {
                path: url,
                filename: fname,
                mimetype: mimetype,
                encoding: encoding,
                attachmentType: t,
                duration: Math.ceil(duration * 1000),
                size: size
            }
        }
        );
        

}
export interface FileData {
    file: Promise<FileUpload>
    path?: string
    metadata?: any
    uid?: string
}
export const handleFile = async ({ file, path, metadata, uid }: FileData) => {
    const data = await uploadFile(file, path, metadata, uid);
    return data;
}