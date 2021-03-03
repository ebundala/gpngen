import { Inject, Injectable } from '@nestjs/common';
import { Adapter, Enforcer } from 'casbin';
import { CASBIN_CONFIG } from './casbin.module';

export interface EnforcerOptions{
    path:string
    adapter:Adapter
}
@Injectable()
export class CasbinService extends Enforcer {
    constructor(@Inject(CASBIN_CONFIG) private readonly conf:EnforcerOptions) {
        super();
        const {path, adapter} = conf;
        this.initWithAdapter(path, adapter);
        
    }
    
}