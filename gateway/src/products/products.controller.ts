import { All, Controller, Inject, Req } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Request } from 'express';
import { stringify } from 'flatted';

@Controller('products')
export class ProductsController {
  constructor(
    @Inject('PRODUCTS_SERVICE') private productsClient: ClientProxy,
  ) {}

  @All()
  productsServiceProxy(@Req() request: Request) {
    return this.productsClient.send(
      { cmd: 'products-service' },
      stringify(request),
    );
  }
}
