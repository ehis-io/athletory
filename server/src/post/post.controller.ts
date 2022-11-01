import { Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { from, Observable } from 'rxjs';
import { PostService } from './post.service';
import { PostEntity } from 'src/model/post.entity';
import { DeleteResult, UpdateResult } from 'typeorm';

@Controller('post')
export class PostController {
    constructor( private readonly postService: PostService ) { }
    
    @Get('all')
    getAllPost(){
        return this.postService.findAll()
    }

    @Get(':id')
    async getPostById(
        @Param('id') id:string
    ){
        return await this.postService.findById(id)
    }
    
    @Post('post')
    createPost(@Body() post :PostEntity): Observable<PostEntity>{
        return from(this.postService.create(post))
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


