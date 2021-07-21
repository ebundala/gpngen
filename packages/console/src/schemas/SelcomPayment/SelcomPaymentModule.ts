
    import { Module } from '@nestjs/common';
    import { SelcomPaymentResolver } from './SelcomPaymentResolvers';

    @Module({
      providers:[SelcomPaymentResolver]
    })
    export class SelcomPaymentModule{}
    