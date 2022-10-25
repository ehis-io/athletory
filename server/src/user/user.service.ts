import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Observable, from } from 'rxjs';
import { CreateUserDto } from 'src/dto/create_user.dto';
import { Repository, DataSource, UpdateResult, DeleteResult } from 'typeorm';
import { User } from '../model/user.entity';




@Injectable()
export class UserService {
    constructor(
    @InjectRepository(User)
    private  readonly userRepository: Repository<User>,
   
    ){}
    findAll(): Observable<User[]>{
        return from(this.userRepository.find())

    }

    async findById(id:number): Promise<User>{
        return await this.userRepository.findOneBy({id})
    }

    async findByEmail(email: string) : Promise<User>{
        
        
            const User = await this.userRepository.findOneBy({email})
    
        if (User){
            return User;


        }throw new HttpException('User with this emil does not exist', HttpStatus.NOT_FOUND)
    
}

    
   
    async create(createUser: CreateUserDto): Promise<User> {
        console.log(createUser)
        return await this.userRepository.save(this.userRepository.create(createUser ))
    }

    updateUser(id: number, post: CreateUserDto):Observable<UpdateResult> {
        return from(this.userRepository.update(id, post))
    }

    async deleteUser(id:number): Promise<void>{
        await this.userRepository.delete(id)
    }
}   