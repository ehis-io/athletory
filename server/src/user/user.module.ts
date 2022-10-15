import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from '../model/user.entity';
import { DatabaseModule } from 'src/database/database.module';
import { AppModule } from 'src/app.module';


@Module({
    imports: [
        forwardRef(() => AppModule), 
        DatabaseModule, TypeOrmModule.forFeature([User])],
        providers: [UserService],
        controllers: [UserController],
})  
export class UserModule {}
