import { Injectable} from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from "bcrypt"
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {
  constructor(  
    private  userService: UserService,
    private  jwtService: JwtService,
      
   
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
    console.log( 'Trying to Login' )
    
    const payload = {username: user.email, sub: user.id}
    return{
      access_token: this.jwtService.sign(payload)
    }
  }
}
  






