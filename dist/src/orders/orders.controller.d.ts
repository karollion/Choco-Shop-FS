import { OrdersService } from './orders.service';
import { CreateOrderDTO } from './dtos/create-order.dto';
import { UpdateOrderDTO } from './dtos/update-order.dto';
export declare class OrdersController {
    private ordersService;
    constructor(ordersService: OrdersService);
    getAll(): any;
    getAllOfUser(userId: string): Promise<(import("@prisma/client/runtime").GetResult<{
        id: string;
        size: import(".prisma/client").Size;
        quantity: number;
        description: string;
        productId: string;
        userId: string;
    }, unknown> & {})[]>;
    getAllDoneOfUser(userId: string): Promise<(import("@prisma/client/runtime").GetResult<{
        id: string;
        size: import(".prisma/client").Size;
        quantity: number;
        description: string;
        productId: string;
        userId: string;
    }, unknown> & {})[]>;
    getById(id: string): Promise<import("@prisma/client/runtime").GetResult<{
        id: string;
        size: import(".prisma/client").Size;
        quantity: number;
        description: string;
        productId: string;
        userId: string;
    }, unknown> & {}>;
    deleteById(id: string): Promise<{
        success: boolean;
    }>;
    create(orderData: CreateOrderDTO): Promise<import("@prisma/client/runtime").GetResult<{
        id: string;
        size: import(".prisma/client").Size;
        quantity: number;
        description: string;
        productId: string;
        userId: string;
    }, unknown> & {}>;
    update(id: string, orderData: UpdateOrderDTO): Promise<{
        success: boolean;
    }>;
    addToConfirmOrder(confirmData: any): Promise<import("@prisma/client/runtime").GetResult<{
        id: string;
        size: import(".prisma/client").Size;
        quantity: number;
        description: string;
        productId: string;
        userId: string;
    }, unknown> & {}>;
}
