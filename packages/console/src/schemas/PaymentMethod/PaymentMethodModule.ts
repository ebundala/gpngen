
    import { Module } from '@nestjs/common';
    import { PaymentMethodResolver } from './PaymentMethodResolvers';

    @Module({
      providers:[PaymentMethodResolver]
    })
    export class PaymentMethodModule{}
    