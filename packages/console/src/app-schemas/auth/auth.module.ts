import { HttpModule, Module } from '@nestjs/common';
import { BusinessLogicService } from 'src/business-rules/bloc/business.logic.service';
import { AuthService } from './auth-service';
import { AuthResolver } from './auth.resolver';


@Module({
  imports: [HttpModule],
  providers: [AuthResolver, AuthService],
})
export class AuthModule { }
