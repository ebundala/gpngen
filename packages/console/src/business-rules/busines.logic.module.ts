import { Module } from "@nestjs/common";
import { BusinessLogicService } from "./bloc/business.logic.service";


@Module({
    providers:[BusinessLogicService]
}
)
export class BusinessLogicModule{
    constructor(private readonly bloc:BusinessLogicService){}
}