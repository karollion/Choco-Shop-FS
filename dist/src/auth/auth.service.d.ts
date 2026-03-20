import { UsersService } from '../users/users.service';
import { RegisterDTO } from './dtos/register-user-dto';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
export declare class AuthService {
    private usersService;
    private jwtService;
    private configService;
    constructor(usersService: UsersService, jwtService: JwtService, configService: ConfigService);
    register(registrationData: RegisterDTO): Promise<import("node_modules/.prisma/client").User>;
    validateUser(email: string, password: string): Promise<{
        id: string;
        email: string;
        role: import("node_modules/.prisma/client").Role;
    }>;
    createSession(user: any): Promise<{
        access_token: string;
    }>;
}
