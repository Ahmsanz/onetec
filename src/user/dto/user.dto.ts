import { User } from "src/interfaces/user.interface";
import { IsString, IsEmail, IsOptional }  from 'class-validator'

export class UserDto implements User {
    @IsString()
    @IsOptional()
    fname?: string; 
    
    @IsString()
    lname?: string;

    @IsEmail()
    email?: string;
}