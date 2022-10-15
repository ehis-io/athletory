import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/model/user.entity';

@Module({
    imports:[
        TypeOrmModule.forRootAsync({
        imports : [ConfigModule],
        inject: [ConfigService],
        useFactory:(configService: ConfigService)=>({
            type: 'postgres',
            host: 'localhost',
            port: parseInt((process.env.POSTGRES_PORT)),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASS,
            database: process.env.POSTGRES_DB,
            entities: [User],
            synchronize: true,
            autoLoadEntities: true,
        })
        }),
    ]
})
export class DatabaseModule {}
