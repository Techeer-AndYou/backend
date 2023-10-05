import { IsString, MaxLength, MinLength } from "class-validator";

export class CreateUserDto{

    @IsString()
    @MinLength(2)
    @MaxLength(10)
    username: string;

    @IsString()
    password: string;

    @IsString()
    email: string;

    @IsString()
    phoneNumber: string;

}