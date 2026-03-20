import { ProductsService } from './products.service';
import { UpdateProductDTO } from './dtos/update-product.dto';
import { CreateProductDTO } from './dtos/create-product.dto';
export declare class ProductsController {
    private productsService;
    constructor(productsService: ProductsService);
    getAll(): any;
    getById(id: string): Promise<import("node_modules/.prisma/client").Product>;
    deleteById(id: string): Promise<{
        success: boolean;
    }>;
    create(productData: CreateProductDTO): Promise<import("node_modules/.prisma/client").Product>;
    update(id: string, productData: UpdateProductDTO): Promise<{
        success: boolean;
    }>;
}
