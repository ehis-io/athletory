import { IsBoolean, IsDateString, IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    firstname: string;
    
    @IsNotEmpty()
    @IsString()
    lastname: string;

    @IsNotEmpty()
    @IsString()
    username:string;
    
    @IsNotEmpty()
    @IsString()
    photo_id: string;
    
    @IsNotEmpty()
    @IsString()
    bio: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsEmail()
    password: string;

    @IsNotEmpty()
    @IsDateString()
    date: string;

    @IsBoolean()
    isActive: boolean;
} 