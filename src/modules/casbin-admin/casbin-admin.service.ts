import { Injectable } from '@nestjs/common';
import { CasbinService } from '../casbin-enforcer/casbin.service';

@Injectable()
export class CasbinAdminService {
    getModels(params: any) {
        this.adapter.getModel();
    }
    deleteAdapter(data: any) {
        throw new Error('Method not implemented.');
    }
    constructor(private readonly adapter: CasbinService) { }

    getEmptyAdapter(args) {
        throw new Error('Method not implemented.');
    }
    setAdapterAllPolicies(args) {
        throw new Error('Method not implemented.');
    }
    removeAdapterPolicy(args) {
        throw new Error('Method not implemented.');
    }
    addAdapterPolicy(args) {
        throw new Error('Method not implemented.');
    }
    getAdapterGroupingPolicies(args) {
        throw new Error('Method not implemented.');
    }
    getAdapterPolicies(args) {
        throw new Error('Method not implemented.');
    }
    testAdapterConnection(args) {
        throw new Error('Method not implemented.');
    }
    updateAdapters(args) {
        throw new Error('Method not implemented.');
    }
    updateAdapter(args) {
        throw new Error('Method not implemented.');
    }
    getAdapters(args) {
        return this.adapter.getAdapter()
    }
}
