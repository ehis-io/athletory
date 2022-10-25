import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import {PostEntity} from '../model/post.entity'
@Injectable()
export class PostService {
    constructor(
        @InjectRepository(PostEntity)
        private readonly postRepository: Repository<PostEntity>,
    ){}

    async findAll():Promise<void>{
        await this.postRepository.find()

    }
    async findById(id: string): Promise<PostEntity>{
        
        return await this.postRepository.findOneBy({id})
    }

    create(createPost: PostEntity): Observable<PostEntity>{
        return from(this.postRepository.save(createPost))

    }
    updatePost(id:number, post: PostEntity):Observable<UpdateResult>{
        return from(this.postRepository.update(id, post))
    }

    deletePost(id: number) :Observable<DeleteResult>{
        return from(this.postRepository.delete(id))
    }
}
    


