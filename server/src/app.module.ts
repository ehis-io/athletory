import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import {ConfigModule, ConfigService} from '@nestjs/config'
import { PostModule } from './post/post.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/authentication.module';
import { AuthService } from './auth/authentication.service';
import { JwtService } from '@nestjs/jwt';
import { UserService } from './user/user.service';
@Module({
    imports: [
     ConfigModule.forRoot({isGlobal:true}),
    TypeOrmModule.forRootAsync({
        imports: [ConfigModule],
        useFactory:(configService: ConfigService)=>({
            type: 'postgres',
            host: 'localhost',
            port: +configService.get<number>('POSTGRES_PORT'),
            username: configService.get('POSTGRES_USER'),
            password: configService.get('POSTGRES_PASS'),
            database: configService.get('POSTGRES_DB'),
            entities: [
                "src/entity/**/*.ts"
            ],
            synchronize: true,
            autoLoadEntities: true,
        }),
        inject:[ConfigService],

        }),
        UserModule,  
        AuthModule,
        PostModule,
        
    ],    
    controllers: [AppController],
    providers: [AuthService, JwtService,],
    })

export class AppModule {}
