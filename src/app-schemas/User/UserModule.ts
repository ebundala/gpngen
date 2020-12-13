
import { Module } from '@nestjs/common';
import { PrismaClientModule } from '../../modules/prisma-client/prisma-client.module';
import { UserResolver } from './UserResolvers';

@Module({
  imports: [PrismaClientModule],
  providers: [UserResolver]
})
export class AppUserModule { }
