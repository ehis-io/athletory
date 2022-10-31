import { Controller, Body, Post, Get, Param, Put, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { UserService} from './user.service'
import { CreateUserDto } from 'src/dto/create_user.dto';
import { User } from 'src/model/user.entity';

// var userStatic = [
//     {
//         'firstname': 'John',
//         'lastname': 'Doe',
//         'email':'johndoe@gmail.com'
//     },

//     {
//         'firstname': 'Sam',
//         'lastname': 'Smith', 
//         'email': 'samsmith@gmail.com'
//     }
// ]

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

   @Get('findAll')
    getAllUser() {
       return this.userService.findAll();
    }

    @Get(':id')
    getUserById(@Param('id') id: number) {
       return this.userService.findById(id);
    }

    @Post('user')
    async createUser(@Body() createUserDto: CreateUserDto): Promise<User>{
        
        console.log(createUserDto)
        return await this.userService.create(createUserDto)
        
    }

    @Put(':id')
    async update(
        @Param(':id') id :number,
        @Body()post: CreateUserDto
    ): Promise<void> {
        await this.userService.updateUser(id, post)
    }

    @Delete(':id')
    async delete(
        @Param('id') id:number
    ): Promise<void> {
        await this.userService.deleteUser(id)
    }
}
