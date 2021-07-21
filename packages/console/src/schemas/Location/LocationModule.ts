
    import { Module } from '@nestjs/common';
    import { LocationResolver } from './LocationResolvers';

    @Module({
      providers:[LocationResolver]
    })
    export class LocationModule{}
    