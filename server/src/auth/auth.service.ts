import { Injectable} from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from "bcrypt"
import { JwtService } from '@nestjs/jwt';
import { jwtConfig } from './constants';


@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private  userService: UserService,
    
      
   
  ){}
  
  async validateUser(email: string, password: string){
    const salt = await bcrypt.genSalt()
    const passwordHash = await bcrypt.hash(password, salt)
    const user = await this.userService.findByEmail(email);
    
    
    if (user && await bcrypt.compare(password, passwordHash)){
      const{password, ...result} = user
      return result
    }
    
    return null
  }
  async login( user:any) {
    console.log( 'Logging in' )
    
    //console.log('trying to sign')
    return {
      access_token: await this.jwtService.signAsync( {
        username: user.firstname,
        sub: user.id 
      }, {secret: jwtConfig.secret}
      ),
      user,
      
    }
  }
}
  






 