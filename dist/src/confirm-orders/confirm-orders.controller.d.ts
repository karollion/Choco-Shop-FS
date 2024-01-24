import { ConfirmOrdersService } from './confirm-orders.service';
import { CreateConfirmOrderDTO } from './dtos/create-confirm-order.dto';
import { UpdateConfirmOrderDTO } from './dtos/update-confirm-order.dto';
export declare class ConfirmOrdersController {
    private confirmOrdersService;
    constructor(confirmOrdersService: ConfirmOrdersService);
    getAll(): any;
    getById(id: string): Promise<import("@prisma/client/runtime").GetResult<{
        id: string;
        fName: string;
        lName: string;
        address: string;
        phone: string;
        email: string;
        userId: string;
    }, unknown> & {}>;
    deleteById(id: string): Promise<{
        success: boolean;
    }>;
    create(confirmOrderData: CreateConfirmOrderDTO): Promise<import("@prisma/client/runtime").GetResult<{
        id: string;
        fName: string;
        lName: string;
        address: string;
        phone: string;
        email: string;
        userId: string;
    }, unknown> & {}>;
    update(id: string, confirmOrderData: UpdateConfirmOrderDTO): Promise<{
        success: boolean;
    }>;
}
