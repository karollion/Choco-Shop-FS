import { ProductsService } from './products.service';
import { UpdateProductDTO } from './dtos/update-product.dto';
import { CreateProductDTO } from './dtos/create-product.dto';
export declare class ProductsController {
    private productsService;
    constructor(productsService: ProductsService);
    getAll(): any;
    getById(id: string): Promise<import("@prisma/client/runtime").GetResult<{
        id: string;
        name: string;
        price: number;
        description: string;
        category: string;
        isNew: boolean;
        photo: string;
    }, unknown> & {}>;
    deleteById(id: string): Promise<{
        success: boolean;
    }>;
    create(productData: CreateProductDTO): Promise<import("@prisma/client/runtime").GetResult<{
        id: string;
        name: string;
        price: number;
        description: string;
        category: string;
        isNew: boolean;
        photo: string;
    }, unknown> & {}>;
    update(id: string, productData: UpdateProductDTO): Promise<{
        success: boolean;
    }>;
}
