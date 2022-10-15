import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
//import { ProductsModule } from './products/products.module';
//import { DataSource } from 'typeorm';
import { UserModule } from './user/user.module';
import {ConfigModule, ConfigService} from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm';
import {User} from './model/user.entity'
import { DatabaseModule } from './database/database.module';
import { forwardRef } from '@nestjs/common';
@Module({
    imports: [ DatabaseModule, ConfigModule.forRoot(),
     forwardRef(() => UserModule)
    ],
    
 
    
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
