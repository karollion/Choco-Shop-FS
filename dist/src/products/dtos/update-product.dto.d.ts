import { Size } from '@prisma/client';
export declare class UpdateProductDTO {
    name: string;
    price: number;
    size: Size;
    category: string;
    isNew: boolean;
    description: string;
    photo: string;
}
