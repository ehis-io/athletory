import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/authentication.service';


@Controller()
export class AppController {
    constructor( private authService: AuthService ) { }
    
    @UseGuards(LocalAuthGuard)
    @Post( 'auth/login' )
        
    async login(@Request() req:any) {
        return this.authService.login(req.user)
    }
}


