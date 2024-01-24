import { Size } from '@prisma/client';
export declare class UpdateOrderDTO {
    quantity: number;
    description: string;
    productId: string;
    userId: string;
    size: Size;
}
