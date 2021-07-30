import { Resolver, Query, Parent, Args, Context, Info } from "@nestjs/graphql";
import { GoogleMapService } from "./googlemap.service";
//import {GeocodeResponse} from '../../models/graphql'
import { TenantContext } from "@mechsoft/common";
// import { GeocodeResponse } from "@googlemaps/google-maps-services-js";
import { GeocodeComponents } from "@googlemaps/google-maps-services-js/dist/geocode/geocode";
import { ConfigService } from "@nestjs/config";
import { RouteResponse,GeocodeResponse,
     GeocodeInput, ReverseGeocodeResponse, ReverseGeocodeInput, RouteQueryInput, PlaceAutocompleteResponse, PlaceAutocompleteInput} from "src/models/graphql";
import { UseGuards } from "@nestjs/common";
import { AuthorizerGuard } from "@mechsoft/enforcer";


@Resolver((of)=>RouteResponse)
@UseGuards(AuthorizerGuard)
export class GoogleMapGeolocationResolver {
    private _key: string;
    constructor(private readonly service: GoogleMapService,
        private readonly configService: ConfigService) {
        this._key = this.configService.get<string>("GOOGLE_MAPS_API_KEY")
    }

    @Query((returns)=>GeocodeResponse)
    async geocode(@Parent() _, @Args("data") args: GeocodeInput, @Context() ctx: TenantContext, @Info() info) {
        
        try{
         const params = { ...args, key: this._key };
        const res = await this.service.geocode({ params });
        
        if (res.status <= 300) {
            return {
                status: true,
                message: res.statusText,
                data: res.data
            }
        }
        return {
            status: false,
            message: res.statusText,
            data:res.data
        }
       }catch(e){
           ;
        return {
            status: false,
            message: e.message??"Unknown error",
            data:e.response.data
        }
       }
    }
    @Query((returns)=>ReverseGeocodeResponse)
    async reverseGeocode(@Parent() _, @Args("data") args: ReverseGeocodeInput, @Context() ctx: TenantContext, @Info() info) {
        //todo: geocode here
        
        try{
         const params = { ...args as any, key: this._key };
        const res = await this.service.reverseGeocode({ params });
        
        if (res.status <= 300) {
            return {
                status: true,
                message: res.statusText,
                data: res.data
            }
        }
        return {
            status: false,
            message: res.statusText,
            data:res.data
        }
       }catch(e){
           ;
        return {
            status: false,
            message: e.message??"Unknown error",
            data:e.response.data
        }
       }
    }
    @Query((returns)=>RouteResponse)
    async route(@Parent() _, @Args("data") args:RouteQueryInput, @Context() ctx: TenantContext, @Info() info) {
        //todo: route here
        
        try{
            const params = { ...args as any, key: this._key };
        const res = await this.service.directions({ params});
        if (res.status <= 300) {
            return {
                status: true,
                message: res.statusText,
                data: res.data
            }
        }
        return {
            status: false,
            message: res.statusText,
            data: res.data

        }
      
      }catch(e){
        
     return {
         status: false,
         message: e.message??"Unknown error",
         data:e.response.data
     }
    }
  }
  @Query((returns)=>PlaceAutocompleteResponse)
  async placesAutocomplete(@Parent() _, @Args("data") args:PlaceAutocompleteInput, @Context() ctx: TenantContext, @Info() info) {
      
      try{
          const params = { ...args as any, key: this._key };
      const res = await this.service.placeAutocomplete({ params});
      if (res.status <= 300) {
          return {
              status: true,
              message: res.statusText,
              data: res.data
          }
      }
      return {
          status: false,
          message: res.statusText,
          data: res.data

      }
    
    }catch(e){
      
   return {
       status: false,
       message: e.message??"Unknown error",
       data:e.response.data
   }
  }
}
}