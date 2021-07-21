
    import { Module } from '@nestjs/common';
    import { ServiceCategoryResolver } from './ServiceCategoryResolvers';

    @Module({
      providers:[ServiceCategoryResolver]
    })
    export class ServiceCategoryModule{}
    