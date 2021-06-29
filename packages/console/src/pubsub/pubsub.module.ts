import { ConfigModule, ConfigService } from '@nestjs/config';
import { RedisPubSub } from 'graphql-redis-subscriptions';
import { Global, Injectable, Module } from '@nestjs/common';
import * as Redis from 'ioredis';
import { RedisCache } from './redis.service';



@Global()
@Module({
  imports: [ConfigModule],
  providers: [
    
    {
      provide: RedisPubSub,
      useFactory: (
        configService: ConfigService
      ) => {
        return new RedisPubSub({
        connection: {
          host: configService.get('REDIS_HOST'),
          port: configService.get('REDIS_PORT'),
        }
      });
    },
      inject: [ConfigService]
    },

    {
      provide: RedisCache,
      useFactory:(configService: ConfigService)=>{
        
        return new Redis({
          host:configService.get('REDIS_HOST'),
          port: configService.get('REDIS_PORT'),
        });
      },
      inject:[ConfigService]
    },
  
  ],
  exports: [RedisPubSub,RedisCache],
})
export class PubSubModule {}

