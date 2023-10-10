import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { Request } from 'express';
import { parse } from 'flatted';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({ cmd: 'products-service' })
  getAllProducts(@Payload() data: string) {
    const parsedData: Request = parse(data);
    // console.log(parsedData);
    console.log(parsedData.url, parsedData.query);

    return { message: 'getAllProducts signal received!' };
  }
}
