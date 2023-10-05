import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('products')
export class ProductsController {
  constructor(
    @Inject('PRODUCTS_SERVICE') private productsClient: ClientProxy,
  ) {}

  @Get()
  getAllProducts() {
    return this.productsClient.send({ cmd: 'getAllProducts' }, {});
  }
}
