import { HttpCode, Res } from "@nestjs/common";
import { Body, Controller, Post } from "@nestjs/common";
import { GraphhopperService } from "./graphhopper.service";
import { Response } from 'express';
@Controller("gh")
export class GraphhopperController{
    constructor(private readonly service: GraphhopperService ){

    }
@Post("route")
@HttpCode(200)
async route(@Body() body,@Res() res:Response ){
  const {data,status,statusText}= await this.service.route(body); 
  res.statusMessage=statusText;
  res.status(status).json(data); 
}
}