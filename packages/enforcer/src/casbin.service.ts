import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { Adapter, Enforcer } from 'casbin';
import { CASBIN_CONFIG } from './casbin.module';

export interface EnforcerOptions{
    path:string
    adapter:Adapter
}
@Injectable()
export class CasbinService extends Enforcer implements OnModuleInit {

    constructor(@Inject(CASBIN_CONFIG) private readonly conf:EnforcerOptions) {
        super();
    }
    async init() {
        const { path, adapter } = this.conf;
        await this.initWithAdapter(path, adapter);
        this.enableAutoBuildRoleLinks(true);
        this.enableAutoNotifyWatcher(true);
        this.enableAutoSave(true);
        this.enableEnforce(true);
        //this.loadPolicy();
        if (process.env.DEBUG)
            this.enableLog(true);
    }
    async onModuleInit() {
        await this.init();
    }
}