import { UsersService } from './users.service';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    getAll(): any;
    getById(id: string): Promise<import(".prisma/client").User>;
    delete(id: string): Promise<{
        success: boolean;
    }>;
}
