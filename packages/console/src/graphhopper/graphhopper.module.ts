import { DynamicModule, HttpModule, Module } from "@nestjs/common";
import { GraphhopperController } from "./graphhopper.controller";
import { GraphhopperService, GRAPHHOPPER_BACKEND } from "./graphhopper.service";

@Module({   
})
export class GraphhopperModule{
    static forRoot(url: string): DynamicModule{
        return {
            module: GraphhopperModule,
            imports:[HttpModule],
            providers:[{
                provide: GRAPHHOPPER_BACKEND,
                useValue: url
            },GraphhopperService],
            controllers:[GraphhopperController]
        }
    }
}