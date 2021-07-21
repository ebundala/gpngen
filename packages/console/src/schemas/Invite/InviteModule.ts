
    import { Module } from '@nestjs/common';
    import { InviteResolver } from './InviteResolvers';

    @Module({
      providers:[InviteResolver]
    })
    export class InviteModule{}
    