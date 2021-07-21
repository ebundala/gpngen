
    import { Module } from '@nestjs/common';
    import { UserResolver } from './UserResolvers';

    @Module({
      providers:[UserResolver]
    })
    export class UserModule{}
    