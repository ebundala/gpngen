import { HttpCode, Res, UseGuards } from "@nestjs/common";
import { Body, Controller, Post } from "@nestjs/common";
import { GraphhopperService } from "./graphhopper.service";
import { Args, Query, Resolver } from "@nestjs/graphql";
import { AuthorizerGuard } from "@mechsoft/enforcer";
@Resolver()
@UseGuards(AuthorizerGuard)
export class GraphhopperResolver {
  constructor(private readonly service: GraphhopperService) {

  }
  @Query()
  async route(@Args("data") body) {
    const { data, status, statusText } = await this.service.route(body);
    if (status < 300) {
      return {
        status: true, message: statusText, data
      }
    }
    return {
      status: false, message: statusText,data
    };
  }


}