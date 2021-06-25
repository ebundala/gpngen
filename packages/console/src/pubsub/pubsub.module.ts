import { ConfigModule, ConfigService } from '@nestjs/config';
import { RedisPubSub } from 'graphql-redis-subscriptions';
import { Global, Module } from '@nestjs/common';
import * as Redis from 'ioredis';
export const PUB_SUB = 'PUB_SUB';
 
@Global()
@Module({
  imports: [ConfigModule],
  providers: [
    {
      provide: RedisPubSub,
      useFactory: (
        configService: ConfigService
      ) => {
        //   const opts={
        //     host:configService.get('REDIS_HOST'),
        //     port: configService.get('REDIS_PORT'),
        //     retryStrategy: times => {
        //       // reconnect after
        //       return Math.min(times * 50, 2000);
        //     }
        //   }
          let psub= new RedisPubSub({
        //   publisher: new Redis(opts),
        //   subscriber: new Redis(opts)
        connection: {
          host: configService.get('REDIS_HOST'),
          port: configService.get('REDIS_PORT'),
        }
      });
     
      return psub
    },
      inject: [ConfigService]
    }
  ],
  exports: [RedisPubSub],
})
export class PubSubModule {}