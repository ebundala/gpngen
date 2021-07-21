
    import { Module } from '@nestjs/common';
    import { SelcomDisbursementResolver } from './SelcomDisbursementResolvers';

    @Module({
      providers:[SelcomDisbursementResolver]
    })
    export class SelcomDisbursementModule{}
    