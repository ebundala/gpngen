import { Module } from '@nestjs/common';
import { CasbinAdminService } from './casbin-admin.service';

@Module({
  //  imports: [CasbinModule],
  providers: [CasbinAdminService],
  // controllers: [CasbinAdminController]
})
export class CasbinAdminModule { }
