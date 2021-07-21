
    import { Module } from '@nestjs/common';
    import { DeviceResolver } from './DeviceResolvers';

    @Module({
      providers:[DeviceResolver]
    })
    export class DeviceModule{}
    