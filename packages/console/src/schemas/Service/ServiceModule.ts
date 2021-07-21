
    import { Module } from '@nestjs/common';
    import { ServiceResolver } from './ServiceResolvers';

    @Module({
      providers:[ServiceResolver]
    })
    export class ServiceModule{}
    