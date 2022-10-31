import {IsEmail, IsNotEmpty, IsString} from 'class-validator'
export class PostDto {
    @IsNotEmpty()
    @IsString()
    post_title:string;

    @IsNotEmpty()
    @IsString()
    post_text:string;
    
    @IsNotEmpty()
    @IsString()
    post_image_id:string;
    
    @IsNotEmpty()
    @IsString()
    user_id:string;
    

    

}