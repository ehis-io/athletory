import { Controller, Body, Post, Get, Param, Put, Delete } from '@nestjs/common';
import { UserService} from './user.service'
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { User } from 'src/model/user.entity';
import { Observable, from } from 'rxjs';
// import { Observable } from 'rxjs/internal/Observable';
var userStatic = [
    {
        'firstname': 'John',
        'lastname': 'Doe',
        'email':'johndoe@gmail.com'
    },

    {
        'firstname': 'Sam',
        'lastname': 'Smith', 
        'email': 'samsmith@gmail.com'
    }
]

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

   @Get('findAll')
    getAllUser() {
       return this.userService.findAll();
    }

    // @Get(':id')
    // getUserById(@Param('id') id: string) {
    //    return this.userService.find(id);
    // }

    @Post('createUser')
    createUser(@Body() post: User): Observable<User>{
        return from(this.userService.create(post))
    }

    @Put(':id')
    update(
        @Param(':id') id :number,
        @Body()post: User
    ): Observable<UpdateResult> {
        return this.userService.updateUser(id, post)
    }

    @Delete(':id')
    delete(
        @Param('id') id:number
    ): Observable<DeleteResult> {
        return this.userService.deleteUser(id)
    }
}
