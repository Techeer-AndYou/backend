import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Users } from './models/users.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { LoginUserResponseDto } from './dto/login-response.dto';
import * as bcrypt from 'bcrypt';


@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(Users)
        private usersRepository: Repository<Users>
    ) {}

    async createUser(createUserDto: CreateUserDto): Promise<void>{
        const {email, password, username, phoneNumber} = createUserDto;

        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = this.usersRepository.create({
            email,
            username,
            phoneNumber,
            password: hashedPassword
        });
        await this.usersRepository.save(newUser);
    }

    async loginUser(loginUserDto: LoginUserDto): Promise<LoginUserDto> {
        const {email, password} = loginUserDto;
        const user = await this.usersRepository.findOne({where: {email}});

        if(user && (await bcrypt.compare(password, user.password))){
            return loginUserDto;
        } else {
            throw new UnauthorizedException('로그인 실패');
        }
    }


}
