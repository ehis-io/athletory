import { Module } from '@nestjs/common';

import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
//import { ProductsModule } from './p/products.module';

@Module({
    //imports: [ProductsModule],
    controllers: [ProductsController],
    providers: [ProductsService],
})
export class ProductsModule {}
