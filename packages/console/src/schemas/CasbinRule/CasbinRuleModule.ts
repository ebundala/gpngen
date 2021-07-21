
    import { Module } from '@nestjs/common';
    import { CasbinRuleResolver } from './CasbinRuleResolvers';

    @Module({
      providers:[CasbinRuleResolver]
    })
    export class CasbinRuleModule{}
    