import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CasbinAdminService } from './casbin-admin.service';


@Controller('casbin-admin')
export class CasbinAdminController {
    constructor(private readonly service: CasbinAdminService) { }
    //Account
    @Post("/api/v1/logout")
    async logout(@Body() data) { }
    @Get("/api/v1/user")
    getUser() { }
    @Get("/api/v1/auth-github")
    authGithub() { }
    @Get("/api/v1/account")
    getAccount() { }

    //Adapters
    @Get("/api/v1/adapters")
    async getAdapters(@Param() params) {
        return this.service.getAdapters(params)
    }
    @Post("/api/v1/adapters")
    updateAdapters(@Body() data) {
        return this.service.updateAdapters(data);
    }
    @Get("/api/v1/adapter")
    getAdapter(@Param() params) {
        return this.service.getAdapters(params);
    }
    @Post("/api/v1/adapter")
    updateAdapter(@Body() data) {
        return this.service.updateAdapter(data);
    }
    @Delete("/api/v1/adapter")
    deleteAdapter(@Body() data) {
        return this.service.deleteAdapter(data)
    }
    @Post("/api/v1/test-adapter-connection")
    testAdapterConnection(@Body() data) {
        return this.service.testAdapterConnection(data);
    }
    @Get("/api/v1/adapter-policies")
    getAdapterPolicies(@Param() params) {
        return this.service.getAdapterPolicies(params)
    }
    @Get("/api/v1/-adapter-grouping-policies")
    getAdapterGroupingPolicies(@Param() params) {
        return this.service.getAdapterGroupingPolicies(params)
    }
    @Post("/api/v1/adapter-policy")
    addAdapterPolicy(@Body() data) {
        return this.service.addAdapterPolicy(data)
    }
    @Delete("/api/v1/adapter-policy")
    removeAdapterPolicy(@Body() data) {
        return this.service.removeAdapterPolicy(data)
    }
    @Post("/api/v1/adapter-all-policies")
    setAdapterAllPolicies(@Body() data) {
        return this.service.setAdapterAllPolicies(data)
    }
    @Get("/api/v1/empty-adapter")
    getEmptyAdapter(@Param() params) {
        return this.service.getEmptyAdapter(params);
    }

    //Models
    @Get("/api/v1/models")
    getModels(@Param() params) {
        return this.service.getModels(params);
    }
    @Post("/api/v1/models")
    updateModels() { }
    @Get("/api/v1/model")
    getModel() { }
    @Post("/api/v1/model")
    updateModel() { }
    @Delete("/api/v1/model")
    deleteModel() { }
    @Get("/api/v1/empty-model")
    getEmptyModel() { }

    //Enforcer
    @Get("/api/v1/enforcers")
    getEnforcers() { }
    @Get("/api/v1/enforcers")
    updateEnforcers() { }
    @Get("/api/v1/enforcer")
    getEnforcer() { }
    @Post("/api/v1/enforcer")
    updateEnforcer() { }
    @Delete("/api/v1/enforcer")
    DeleteEnforcer() { }
    @Get("/api/v1/empty-enforcer")
    getEmptyEnforcer() { }

    //Policy
    @Get("/api/v1/policyLists")
    getPolicyLists() { }
    @Get("/api/v1/policyList")
    getPolicyList() { }
    @Post("/api/v1/policyList")
    updatePolicyList() { }
    @Delete("/api/v1/policyList")
    deletePolicyList() { }
    @Get("/api/v1/empty-policyList")
    getEmptyPolicyList() { }
}
