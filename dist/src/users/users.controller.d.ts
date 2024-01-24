import { UsersService } from './users.service';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    getAll(): any;
    getById(id: string): Promise<import("@prisma/client/runtime").GetResult<{
        id: string;
        email: string;
        role: import(".prisma/client").Role;
    }, unknown> & {}>;
    delete(id: string): Promise<{
        success: boolean;
    }>;
}
