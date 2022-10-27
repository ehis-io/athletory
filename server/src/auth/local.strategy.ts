import { Strategy } from "passport-local";
import { Inject, Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { AuthService } from "./authentication.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
  constructor(private readonly authService : AuthService){
    super()
  }
  async validate(username:string, password:string): Promise<any>{
    const user =await this.authService.validateUser(username, password)
    if (!user) {
      throw new UnauthorizedException()
    }
    return user;
  } 
}