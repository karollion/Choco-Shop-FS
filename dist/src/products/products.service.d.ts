import { Product } from '@prisma/client';
import { PrismaService } from 'src/shared/services/prisma.service';
export declare class ProductsService {
    private prismaService;
    constructor(prismaService: PrismaService);
    getAll(): Promise<Product[]>;
    getById(id: Product['id']): Promise<Product | null>;
    deleteById(id: Product['id']): Promise<Product>;
    create(productData: Omit<Product, 'id'>): Promise<Product>;
    updateById(id: Product['id'], productData: Omit<Product, 'id'>): Promise<Product>;
}
