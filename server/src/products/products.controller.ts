import {
    Controller,
    Post,
    Body,
    Get,
    Param,
    Patch,
    Delete,
} from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}
    @Post()
    addProduct(
        @Body('title') proTitle: string,
        @Body('description') proDesc: string,
        @Body('price') proPrice: number,
    ): any {
        const generatedId = this.productsService.insertProducts(
            proTitle,
            proDesc,
            proPrice,
        );
        return { id: generatedId };
    }
    @Get()
    getAllProduct() {
        return this.productsService.getProducts();
    }

    @Get(':id')
    getProduct(@Param('id') prodId: string) {
        return this.productsService.getSingleProduct(prodId);
    }
    @Patch(':id')
    updatePoduct(
        @Param('id') prodId: string,
        @Body('title') prodTitle: string,
        @Body('description') prodDesc: string,
        @Body('price') prodPrice: number,
    ) {
        this.productsService.updateProduct(
            prodId,
            prodTitle,
            prodDesc,
            prodPrice,
        );
    }
    @Delete(':id')
    deletePoduct(@Param('id') prodId: string) {
        this.productsService.deleteProduct(prodId);
        return null;
    }
}
