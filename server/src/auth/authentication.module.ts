import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/model/user.entity';
import { UserModule } from 'src/user/user.module';
import { UserService } from 'src/user/user.service';
import { AuthenticationController } from './authentication.controller';
import { AuthService } from './authentication.service';
import { jwtConstants } from './constants';
import { LocalStrategy } from './local.strategy';





@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions:{expiresIn:'100s'},
    }),
  ],
  controllers:[AuthenticationController,],
  providers:[AuthService, LocalStrategy],
  exports:[AuthService]

})
export class AuthModule {}
