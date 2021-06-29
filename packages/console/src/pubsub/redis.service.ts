import * as Redis from 'ioredis';

export class RedisCache extends Redis{
    constructor(options){
        super(options)
    }
}