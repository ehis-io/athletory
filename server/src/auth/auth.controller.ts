import { Controller, Post, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './local-auth.guard';

@Controller( 'au' )
export class AuthenticationController {
    @UseGuards(LocalAuthGuard)
    @Post( 'log' )
    async login() {
        
    }

}