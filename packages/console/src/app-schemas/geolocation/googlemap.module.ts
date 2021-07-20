import {Module,DynamicModule} from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import {GoogleMapService} from './googlemap.service'
import {AxiosRequestConfig} from 'axios'
import { GoogleMapGeolocationResolver } from './googlemap.resolver'

@Module({})
export class GoogleMapModule {
    static forRoot(config?: AxiosRequestConfig): DynamicModule {
        return {
            module:GoogleMapModule,           
            imports:[ConfigModule,],            
            providers:[
                {   provide:GoogleMapService,
                    inject:[ConfigService],
                    useFactory:(configService:ConfigService)=>{
                         const api = configService.get("GOOGLE_MAPS_API_KEY")
                         if(config){
                         config.params.key=api;
                         }
                        return new GoogleMapService({config})
                    }
                },
                GoogleMapGeolocationResolver
            ],
            exports: [GoogleMapService]
        }
    }
}