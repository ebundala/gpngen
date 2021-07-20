import {Inject, Injectable} from '@nestjs/common';
import {Client,ClientOptions} from "@googlemaps/google-maps-services-js"
//const GOOGLE_MAPS_CLIENT_CONFIG = 'GOOGLE_MAPS_CLIENT_CONFIG';
@Injectable()
export class GoogleMapService extends Client{
  constructor(private readonly config: ClientOptions) {
    super(config);
  }
}