import { Body, Controller, Post, Res, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from '../dto/create.user.dto';
import { Response } from 'express';
import { UserDto } from '../dto/user.dto';
import { UsersService } from '../service/users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {}

    @Post('/')
    async createUser(
        @Body(new ValidationPipe()) user: CreateUserDto,
        @Res() res: Response
    ): Promise<Response> {
        const { fname, lname, email } = user;

        // redundant validation, just in case class-validator is removed
        if (!fname || !lname || !email) {
            res.status(400).json({error: 'All fields are required'});
        }
        const newUser: UserDto = await this.userService.createUser(fname as string, lname as string, email as string);
        
        return res.setTimeout(1000, () => {
            res.send(`New user created: his/her name is ${newUser.fname} ${newUser.lname}, and his/her email is ${newUser.email}`)
        });
    }
}
