import { Size } from '@prisma/client';
export declare class CreateOrderDTO {
    quantity: number;
    description: string;
    productId: string;
    userId: string;
    size: Size;
}
