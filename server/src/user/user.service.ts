import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Observable, from } from 'rxjs';
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

    // findById(Id : number, Id = id):Observable<User[]>{
    //     return from(this.userRepository.findBy(id))
    // }

    
   
    create(createUser: User): Observable<User> {
        return from(this.userRepository.save(createUser))
    }

    updateUser(id: number, post: User):Observable<UpdateResult> {
        return from(this.userRepository.update(id, post))
    }

    deleteUser(id:number):Observable<DeleteResult>{
        return from(this.userRepository.delete(id ))
    }
}   

    


    //     //const user = new User()
    //     // user.firstname =
    //     // const queryRunner = this.dataSource.createQueryRunner();
    //     // await queryRunner.connect();
    //     // await queryRunner.startTransaction()
    //     try{
    //         // await queryRunner.manager.save(user)
    //         // await queryRunner.commitTransaction()

    //     }catch (err){
    //         // await queryRunner.rollbackTransaction()

    //     } finally{
    //         //await queryRunner.release();

    //     }
    //}

    // findAll(): Promise<User[]> {
    //     return 
    //     //this.userRepository.find();
    // }

    // findOne(id: string): Promise<User> {
    //     return this.userRepository.findOneBy({ id });
    // }
    // async remove(id: string): Promise<void> {
    //  await this.userRepository.delete(id);
    // }
    //}
