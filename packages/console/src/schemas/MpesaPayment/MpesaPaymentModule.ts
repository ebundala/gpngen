
    import { Module } from '@nestjs/common';
    import { MpesaPaymentResolver } from './MpesaPaymentResolvers';

    @Module({
      providers:[MpesaPaymentResolver]
    })
    export class MpesaPaymentModule{}
    