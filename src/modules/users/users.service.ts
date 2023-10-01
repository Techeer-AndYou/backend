import { Injectable } from '@nestjs/common';
import { Users } from './models/users.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(Users)
        private usersRepository: Repository<Users>
    ) {}

    async createUser(createUserDto: CreateUserDto): Promise<void>{
        const newUser = this.usersRepository.create(createUserDto);
        await this.usersRepository.save(newUser);
    }

    async loginUser(){
        
    }
}
