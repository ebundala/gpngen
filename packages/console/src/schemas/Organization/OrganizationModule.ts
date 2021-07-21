
    import { Module } from '@nestjs/common';
    import { OrganizationResolver } from './OrganizationResolvers';

    @Module({
      providers:[OrganizationResolver]
    })
    export class OrganizationModule{}
    