
    import { Module } from '@nestjs/common';
    import { RatingResolver } from './RatingResolvers';

    @Module({
      providers:[RatingResolver]
    })
    export class RatingModule{}
    