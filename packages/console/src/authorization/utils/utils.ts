export declare type ReflectResult = { v?: any, status: boolean }
//export declare type ReflectFail = { v?: any, status: boolean }

export const reflect = (p: Promise<any>) => p.then((v): ReflectResult => ({ v, status: true }),
    (e): ReflectResult => ({ v: e, status: false }));