import { HttpException, HttpStatus, Injectable} from '@nestjs/common';
import { CreateUserDto } from 'src/dto/create_user.dto';
import { UserService } from 'src/user/user.service';
import * as bcrypt from "bcrypt"


@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService){}
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
  
}
  






