import { ConfirmOrder } from '@prisma/client';
import { PrismaService } from 'src/shared/services/prisma.service';
export declare class ConfirmOrdersService {
    private prismaService;
    constructor(prismaService: PrismaService);
    getAll(): Promise<ConfirmOrder[]>;
    getById(id: ConfirmOrder['id']): Promise<ConfirmOrder | null>;
    deleteById(id: ConfirmOrder['id']): Promise<ConfirmOrder>;
    create(confirmOrderData: Omit<ConfirmOrder, 'id'>): Promise<ConfirmOrder>;
    updateById(id: ConfirmOrder['id'], confirmOrderData: Omit<ConfirmOrder, 'id'>): Promise<ConfirmOrder>;
}
