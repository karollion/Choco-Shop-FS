import { AuthService } from './auth.service';
import { RegisterDTO } from './dtos/register-user-dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    create(registrationData: RegisterDTO): Promise<import("@prisma/client/runtime").GetResult<{
        id: string;
        email: string;
        role: import(".prisma/client").Role;
    }, unknown> & {}>;
    login(req: any, res: any): Promise<void>;
    logout(res: any): Promise<void>;
}
