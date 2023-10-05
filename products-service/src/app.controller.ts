import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    const message = this.appService.getHello();
    return { message: message };
  }

  @MessagePattern({ cmd: 'getAllProducts' })
  getAllProducts() {
    return { message: 'getAllProducts signal received!' };
  }
}
