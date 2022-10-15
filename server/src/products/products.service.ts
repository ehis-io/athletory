import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './products.model';

@Injectable()
export class ProductsService {
    private products: Product[] = [];

    insertProducts(title: string, desc: string, price: number) {
        const prodId = Math.random().toString();

        const newProduct = new Product(
            /*new date().toString,*/
            prodId,
            title,
            desc,
            price,
        );
        this.products.push(newProduct);
        return prodId;
    }
    getProducts() {
        return [...this.products];
    }
    getSingleProduct(productId: string) {
        const product = this.findProduct(productId)[0];
        return { ...product };
    }

    updateProduct(
        productId: string,
        title: string,
        dest: string,
        price: number,
    ) {
        const product = this.findProduct(productId)[0];
        const index = this.findProduct(productId)[1];
        const updatedProduct = { ...product };

        if (title) {
            updatedProduct.title = title;
        }
        this.products[index] = updatedProduct;
    }

    private findProduct(id: string): [Product, number] {
        const productIndex = this.products.findIndex((prod) => prod.id === id);
        const product = this.products[productIndex];
        if (!product) {
            throw new NotFoundException('Could not find Product.');
        }
        return [product, productIndex];
    }
    deleteProduct(prodId: string) {
        const [_, index] = this.findProduct(prodId);
        this.products.splice(index, 1);
    }
}
