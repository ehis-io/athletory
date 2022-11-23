import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/model/user.entity';
import { UserModule } from 'src/user/user.module';
import { AuthenticationController } from './auth.controller';
import { AuthService } from './auth.service';
import { jwtConfig} from './constants';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';





@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    UserModule,
    PassportModule,
    JwtModule.registerAsync( {
      useFactory: () => ( {
        secret: jwtConfig.secret,
        signOptions: {
          expiresIn: '60s'
        }
      })

    
    } ),
  ],
  providers:[AuthService, LocalStrategy, JwtStrategy],
  exports:[AuthService]

})
export class AuthModule {}
