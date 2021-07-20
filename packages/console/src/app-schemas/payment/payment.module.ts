import { Module } from "@nestjs/common";
import { PrismaClientModule } from "@mechsoft/prisma-client";
import {PaymentResolver} from './payment.resolver'
import { MpesaTzModule } from "src/mpesa-tz/mpesa-tz.module";
import { PaymentService } from "./payment.service";

@Module({
    imports:[PrismaClientModule,MpesaTzModule],
    providers:[PaymentResolver,PaymentService],
    exports:[PaymentService]
})
export class PaymentModule {}