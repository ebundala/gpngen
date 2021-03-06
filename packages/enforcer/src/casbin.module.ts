import { DynamicModule, Global, Module } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { join } from 'path';
import { PrismaAdapter } from './adapter.service';
import { CasbinService } from './casbin.service';
export const CASBIN_CONFIG = 'CASBIN_CONFIG';

export interface CasbinModuleOptions {
    model: string;
    adapterOptions?: Prisma.PrismaClientOptions;
}
@Global()
@Module({})
export class CasbinModule {
    static async forRootAsync({
        model,
        adapterOptions,
    }: CasbinModuleOptions): Promise<DynamicModule> {
        const adapter = await PrismaAdapter.newAdapter(adapterOptions);
        return {
            module: CasbinModule,
            providers: [
                {
                    provide: CasbinService,
                    useValue: new CasbinService({ path: join(process.cwd(), model), adapter })
                }
                //CasbinService,
                // {
                //     provide: CASBIN_CONFIG,
                //     useValue: {path:join(process.cwd(), model), adapter},
                // },

            ],
            exports: [CasbinService],
        };
    }
}
