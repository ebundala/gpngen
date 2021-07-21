
    import { Module } from '@nestjs/common';
    import { OrderResolver } from './OrderResolvers';

    @Module({
      providers:[OrderResolver]
    })
    export class OrderModule{}
    