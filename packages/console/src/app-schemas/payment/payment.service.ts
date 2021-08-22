import { HttpException, Injectable } from "@nestjs/common";
import { SelcomUtilityCode, State, TransactionType } from "@prisma/client";
import {  MpesaPaymentCreateNestedOneWithoutTransactionInput, PaybillRequest, SelcomPaymentCreateNestedOneWithoutTransactionInput } from "src/models/graphql";
import { MpesaTzService } from "src/mpesa-tz/mpesa-tz.service";
import { TenantContext } from "@mechsoft/common";

@Injectable()
export class PaymentService{
    constructor(private readonly mpesa: MpesaTzService){}
    async paybill(data:PaybillRequest,ctx: TenantContext,info){
        debugger
        const {auth,prisma}=ctx;
        const {orderId,msisdn,currency,method} = data;
        if(!auth.uid){
           throw new HttpException({status:false,message:"Auth error"},401)
        }
       //TODO choose the appropriate payment method
       const order  = await prisma.order.findUnique({where:{id:orderId},include:{
           service:true,
           organization:true
       }});
       if(!order||order.state==State.DELETED||order.state==State.REJECTED||order.state == State.PENDING){
        throw new HttpException({status:false,message:"Invalid order"},400)
     }
     const methodItem = await prisma.paymentMethod.findUnique({where:{id:method}});
     if(methodItem==null){
        throw new HttpException({status:false,message:"Invalid payment method"},400)  
     }
   let  mpesaPayment: MpesaPaymentCreateNestedOneWithoutTransactionInput
    let selcomPayment: SelcomPaymentCreateNestedOneWithoutTransactionInput
    const amount = `${Math.ceil(order.service.price*order.quantity)}`;
      switch(methodItem.code){
          case SelcomUtilityCode.VMCASHIN:
              //mpesa transaction
              mpesaPayment={
                create:{
                //  order:{
                //      connect:{
                //          id:order.id
                //      }
                //  },
                    input_PurchasedItemsDesc:`${order.quantity}x${order.service.name}`,
                    input_Amount:amount,
                    input_CustomerMSISDN:msisdn,
                    input_ServiceProviderCode:this.mpesa.MPESA_ORG_SHORTCODE,
                    input_TransactionReference: order.id,
                    input_ThirdPartyConversationID:order.id,
                    
                    
                }
            };
        
              break;
          default:
              //selcom transaction
          selcomPayment={
              create:{
                  amount: parseInt(amount),
                  msisdn: msisdn,
                  transId: "",
                  utilityref: 123,
                //  orderId:orderId,
                  operator:methodItem.code
              }
          }


      }

   const transaction =  await prisma.transaction.create({
           include:{
               mpesaPayment:true,
               selcomPayment:true,
               initiator:true,
               order:true
           },
           data:{
               initiator:{
                   connect:{
                       id: auth.uid
                   }
               },
               order:{
                   connect:{
                       id:order.id
                   }
               },
               type: TransactionType.PAYMENT,
               paymentMethod:{ connect:{ id: method}},
               mpesaPayment:mpesaPayment,
               selcomPayment: selcomPayment as any
           }
       });
       if(methodItem.code == SelcomUtilityCode.VMCASHIN){
     const result = await this.mpesa.paybill(transaction.mpesaPayment);
     const select = prisma.getSelection(info).valueOf('data', 'Transaction', { select: {  } });
     let tx;
       if(result.output_ResponseCode=="INS-0"){

        tx=   await prisma.transaction.update({
               ...select,
               where:{
                   id:transaction.id
               },
               data:{
                   state:State.COMPLETED,
                   mpesaPayment:{                       
                       update:{
                           output_ConversationID:result.output_ConversationID,
                           output_ResponseCode:result.output_ResponseCode,
                           output_ResponseDesc: result.output_ResponseDesc,
                           output_ThirdPartyConversationID: result.output_ThirdPartyConversationID,
                           output_TransactionID: result.output_TransactionID, 
                           state:State.COMPLETED,                          
                           order:{
                               update:{
                                   state:State.ARCHIVED
                               }
                           }
                       }
                   }
               }
           });
         return  {
            status:false,
            message:result.output_ResponseDesc,
            data:tx        
          };
       }
       else{
         tx=await prisma.transaction.update({
            ...select,
            where:{
                id:transaction.id
            },
            data:{
                state:State.COMPLETED,
                mpesaPayment:{                       
                    update:{
                        output_ConversationID:result.output_ConversationID,
                        output_ResponseCode:result.output_ResponseCode,
                        output_ResponseDesc: result.output_ResponseDesc,
                        output_ThirdPartyConversationID: result.output_ThirdPartyConversationID,
                        output_TransactionID: result.output_TransactionID, 
                        state:State.REJECTED,                          
                        // order:{
                        //     update:{
                        //         state:State.ARCHIVED
                        //     }
                        // }
                    }
                }
            }
        });
        
        return {
            status:false,
            message:result.output_ResponseDesc,
            data:tx
        };
       }
    }
    else{
        //todo selcom payment here
        throw new HttpException({status:false,message:"Payment method not supported"},400)  

    }
    }
    
}