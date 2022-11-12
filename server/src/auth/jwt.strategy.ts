import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, ExtractJwt } from "passport-jwt"
import { jwtConfig } from "./constants";

@Injectable()
export class JwtStrategy extends PassportStrategy( Strategy ){
    constructor() {
        super( {
            
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: jwtConfig.secret,
        })
    }

    async validate( payload: any ) {
        console.log(payload)
        return { userId: payload.sub, username: payload.username}
    }
    
}
