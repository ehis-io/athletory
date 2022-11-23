import { Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { from, Observable } from 'rxjs';
import { PostService } from './post.service';
import { PostEntity } from 'src/model/post.entity';
import { DeleteResult, UpdateResult } from 'typeorm';
import { PostDto } from 'src/dto/create_post.dto';

@Controller('post')
export class PostController {
    constructor( private postService: PostService ) { }
    
    @Get('findAll')
    async getAllPost(){
        return await this.postService.findAll()
    }

    @Get(':id')
    async getPostById(
        @Param('id') id:string
    ){
        return await this.postService.findById(id)
    }
    
    @Post('post')
    async createPost( @Body() postDto: PostDto ): Promise<PostEntity>{
        console.log(postDto)
        return await this.postService.create(postDto)
    }
    
    @Put(':id')
    update(
        @Param(':id') id:number,
        @Body()post:PostEntity
    ): Observable<UpdateResult> {
        return from(this.postService.updatePost(id, post))
    }

    @Delete(':id')
    delete(
        @Param('id') id :number
    ):Observable<DeleteResult> {
        return this.postService.deletePost(id)
    }

    

}


