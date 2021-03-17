import { Global, Module } from "@nestjs/common";
import { BusinessRules } from "./businesrules";

@Global()
@Module(
    {
providers:[BusinessRules],
exports:[BusinessRules],
    }
)
export class BusinessRulesModule{}