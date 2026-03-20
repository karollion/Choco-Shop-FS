import { AuthService } from './auth.service';
import { RegisterDTO } from './dtos/register-user-dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    create(registrationData: RegisterDTO): Promise<import("node_modules/.prisma/client").User>;
    login(req: any, res: any): Promise<void>;
    logout(res: any): Promise<void>;
}
