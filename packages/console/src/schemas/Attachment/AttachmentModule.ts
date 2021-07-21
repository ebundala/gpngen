
    import { Module } from '@nestjs/common';
    import { AttachmentResolver } from './AttachmentResolvers';

    @Module({
      providers:[AttachmentResolver]
    })
    export class AttachmentModule{}
    