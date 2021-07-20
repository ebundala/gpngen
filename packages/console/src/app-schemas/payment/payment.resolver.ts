import { Injectable } from "@nestjs/common";
import { Args, CONTEXT, Context, Info, Mutation, Resolver } from "@nestjs/graphql";
import { PaybillRequest, PaybillResponse } from "src/models/graphql";
import { MpesaTzService } from "src/mpesa-tz/mpesa-tz.service";
import { TenantContext } from "@mechsoft/common";
import { PaymentService } from "./payment.service";
import { UseGuards } from "@nestjs/common";
import { AuthorizerGuard } from "@mechsoft/enforcer";

@Resolver((of)=>PaybillResponse)
@UseGuards(AuthorizerGuard)
export class PaymentResolver {
    constructor(private readonly payment: PaymentService){}

 @Mutation((returns)=>PaybillResponse)
 async paybill(_,@Args("data") data:PaybillRequest,@Context() ctx:TenantContext,@Info() info){
    return this.payment.paybill(data,ctx,info);
 }
}