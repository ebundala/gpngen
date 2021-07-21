
    import { Module } from '@nestjs/common';
    import { TransactionResolver } from './TransactionResolvers';

    @Module({
      providers:[TransactionResolver]
    })
    export class TransactionModule{}
    