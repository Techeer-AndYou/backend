import { Body, Controller, Post, Session } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService){}

    @Post('/register')
    createUser(@Body() createUserDto: CreateUserDto): Promise<void>{
        return this.usersService.createUser(createUserDto);

    }

    @Post('/login')
    loginUser(@Body() loginUserDto: LoginUserDto, @Session() session){
        return this.usersService.loginUser(loginUserDto, session);
    }
}
