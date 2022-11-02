import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { PostDto } from 'src/dto/create_post.dto';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import {PostEntity} from '../model/post.entity'
@Injectable()
export class PostService {
    constructor(
        @InjectRepository(PostEntity)
        private readonly postRepository: Repository<PostEntity>,
    ){}

    async findAll(){
        return await this.postRepository.find()

    }
    async findById(id: string): Promise<PostEntity>{
        
        return await this.postRepository.findOneBy({id})
    }

    async create(createPost: PostDto): Promise<PostEntity>{
        return await this.postRepository.save(this.postRepository.create(createPost))

    }

    updatePost(id:number, post: PostEntity):Observable<UpdateResult>{
        return from(this.postRepository.update(id, post))
    }

    deletePost(id: number) :Observable<DeleteResult>{
        return from(this.postRepository.delete(id))
    }
}
    


