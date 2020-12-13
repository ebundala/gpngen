import { Inject } from '@nestjs/common';
import { Enforcer } from 'casbin';
import { CASBIN_CONFIG } from './casbin.module';




export class CasbinService extends Enforcer {
    constructor(@Inject(CASBIN_CONFIG) private readonly conf) {
        super();
        const [path, adapter] = conf;
        this.initWithAdapter(path, adapter);
    }
}