import { Order, OrderOnConfirm } from '@prisma/client';
import { PrismaService } from 'src/shared/services/prisma.service';
export declare class OrdersService {
    private prismaService;
    constructor(prismaService: PrismaService);
    getAll(): Promise<Order[]>;
    getAllOfUser(userId: string): Promise<Order[]>;
    getAllDoneOfUser(userId: string): Promise<Order[]>;
    getById(id: Order['id']): Promise<Order | null>;
    deleteById(id: Order['id']): Promise<Order>;
    create(ordersData: Omit<Order, 'id'>): Promise<Order>;
    updateById(id: Order['id'], productData: Omit<Order, 'id'>): Promise<Order>;
    addToConfirmOrder(confirmData: Omit<OrderOnConfirm, 'id'>): Promise<Order>;
}
