import * as fs from 'fs'
import * as mime from 'mime-types';
import { join } from 'path';
import { AttachmentType } from 'src/models/graphql';
import { GraphQLUpload, FileUpload } from 'graphql-upload'
import * as sharp from 'sharp';
import { v4 as uuidv4 } from 'uuid';
import { getAudioDurationInSeconds } from 'get-audio-duration'
import { mkdrIfNotExist } from '@mechsoft/apigen';

export const resizer = (rs: fs.ReadStream, ws: fs.WriteStream,size = {height:480,width:408}) => {
    const st = sharp()
        .resize({
            ...size,
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
export const writeStreamToFile = (rs: fs.ReadStream, path: string, type: AttachmentType,size={height:480,width:480}) => new Promise((resolve, reject) => {
    const ws = fs.createWriteStream(path);
    const onError = (e) => {
        ws.close();
        rs.close();

        reject(e)

    }
    rs.on('error', onError.bind(this));
    
    if (type == AttachmentType.IMAGE) {
        
        const ws360=fs.createWriteStream(`${path}.thumbnail-largest.webp`);
        const ws240=fs.createWriteStream(`${path}.thumbnail-large.webp`);
        const ws160=fs.createWriteStream(`${path}.thumbnail-medium.webp`);
        const ws128=fs.createWriteStream(`${path}.thumbnail-small.webp`);
        const ws80=fs.createWriteStream(`${path}.thumbnail-smallest.webp`);
        const wstr = [ws,ws80,ws128,ws160,ws240,ws360]
       Promise.all
       (wstr.map((w)=>{
            return new Promise((resolve,reject)=>{
                w.on('error', (e) => {
                    reject(e);
                });
                w.on('finish', () => {
                    const size = w.bytesWritten;
                   
                    resolve(size);
                });
            });
        })).then(([size,..._])=>{
            wstr.forEach((v)=>v.close());
            resolve({ path, size:size });
        }).catch((e)=>{
            reject(e);
            wstr.forEach((v)=>v.close());
        })
        rs.pipe(resizer(rs, ws,size)).pipe(ws)
        rs.pipe(resizer(rs, ws360,{height:360,width:360})).pipe(ws360);
        rs.pipe(resizer(rs, ws240,{height:240,width:240})).pipe(ws240);
        rs.pipe(resizer(rs, ws160,{height:160,width:160})).pipe(ws160);
        rs.pipe(resizer(rs, ws128,{height:128,width:128})).pipe(ws128);
        rs.pipe(resizer(rs, ws80,{height:80,width:80})).pipe(ws80);

    } else {
        rs.pipe(ws);
        ws.on('error', onError.bind(this));
        ws.on('finish', () => {
        const size = ws.bytesWritten;
        ws.close();
        resolve({ path, size });
    });
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
            if(t === AttachmentType.IMAGE){
               
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