import { Injectable } from '@nestjs/common';
import { UserDto } from '../dto/user.dto';

@Injectable()
export class UsersService {
    public async createUser(fname: string, lname: string, email: string): Promise<UserDto>{        
        return {
            fname,
            lname,
            email
        }
               
    }
}
