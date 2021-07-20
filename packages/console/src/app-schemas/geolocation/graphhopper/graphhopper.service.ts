import { AppLogger } from "@mechsoft/app-logger";
import { HttpService, Inject, Injectable } from "@nestjs/common";
export const GRAPHHOPPER_BACKEND="GRAPHHOPPER_URL"
@Injectable()
export class GraphhopperService{
    constructor(@Inject(GRAPHHOPPER_BACKEND) private readonly  url: string,
     private readonly httpService: HttpService,
    private readonly logger: AppLogger,
  ) {
   // this.httpService.axiosRef.defaults.baseURL = url;
  //  this.httpService.axiosRef.defaults.headers.post['Content-Type'] = 'application/json';
   // this.logger.setContext(GraphhopperService.name);
}
        // GET     / (com.graphhopper.http.resources.RootResource)
        // GET     /health (com.graphhopper.resources.HealthcheckResource)
        // GET     /i18n (com.graphhopper.resources.I18NResource)
        // GET     /i18n/{locale} (com.graphhopper.resources.I18NResource)
        // GET     /info (com.graphhopper.resources.InfoResource)
        // GET     /isochrone (com.graphhopper.resources.IsochroneResource)
        // POST    /match (com.graphhopper.resources.MapMatchingResource)
        // GET     /mvt/{z}/{x}/{y}.mvt (com.graphhopper.resources.MVTResource)
        // GET     /navigate/directions/v5/gh/{profile}/{coordinatesArray : .+} (com.graphhopper.navigation.NavigateResource)
        // GET     /nearest (com.graphhopper.resources.NearestResource)
        // GET     /route (com.graphhopper.resources.RouteResource)
        // POST    /route (com.graphhopper.resources.RouteResource)
        // GET     /spt (com.graphhopper.resources.SPTResource)

    async route(body){
        const buffer = Buffer.from(
            JSON.stringify(body??{}),
          );
          ;
      return  this.httpService.axiosRef.post(this.url,
        buffer        
        ).then(({data,status,statusText,})=>{
         return {data,status,statusText,};
      }).catch(({response:{data,status,statusText}})=>{
          return {data,status,statusText};
      });
    }
    
}