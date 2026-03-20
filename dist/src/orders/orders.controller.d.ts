import { OrdersService } from './orders.service';
import { CreateOrderDTO } from './dtos/create-order.dto';
import { UpdateOrderDTO } from './dtos/update-order.dto';
export declare class OrdersController {
    private ordersService;
    constructor(ordersService: OrdersService);
    getAll(): any;
    getAllOfUser(userId: string): Promise<import("node_modules/.prisma/client").Order[]>;
    getAllDoneOfUser(userId: string): Promise<import("node_modules/.prisma/client").Order[]>;
    getById(id: string): Promise<import("node_modules/.prisma/client").Order>;
    deleteById(id: string): Promise<{
        success: boolean;
    }>;
    create(orderData: CreateOrderDTO): Promise<import("node_modules/.prisma/client").Order>;
    update(id: string, orderData: UpdateOrderDTO): Promise<{
        success: boolean;
    }>;
    addToConfirmOrder(confirmData: any): Promise<import("node_modules/.prisma/client").Order>;
}
