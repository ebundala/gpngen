import { HttpModule, Module } from '@nestjs/common';
import { Upload } from '../scalars/upload.scalar';
import { AuthService } from './auth-service';
import { AuthResolver } from './auth.resolver';


@Module({
  imports: [HttpModule],
  providers: [AuthResolver, AuthService],
})
export class AuthModule { }
