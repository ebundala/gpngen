
    /**
     *
     * GENERATED FILE DO NOT EDIT CHANGES WITH BE OVERWRITEN EXTEND INSTEAD
     *
     */
      import { UseGuards } from '@nestjs/common';
      import { Resolver, Mutation,Query,Info, Args, Context, Parent } from '@nestjs/graphql';
      import { 
      Attachment,
      AttachmentResponse,
      AttachmentBatchResponse,
      AttachmentCountResponse,
      AttachmentListResponse,
      AggregateAttachmentResponse,
    //  AttachmentCreateInput,
    //  AttachmentUpdateInput,
     // AttachmentUpdateManyMutationInput,
     // AttachmentWhereUniqueInput,
     // AttachmentWhereInput,
     // AttachmentOrderByInput,
     // AttachmentScalarFieldEnum,
     // BatchPayload,
      
    } from '../../models/graphql';
      import {PrismaClient } from '@mechsoft/prisma-client'
      import { TenantContext } from '@mechsoft/common';
      import {AuthorizerGuard} from '@mechsoft/enforcer';

      @Resolver((of)=>Attachment)
      @UseGuards(AuthorizerGuard)
      export class AttachmentResolver {
          
         
        }