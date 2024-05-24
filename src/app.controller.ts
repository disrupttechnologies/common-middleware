import { Controller, Get } from '@nestjs/common';
import ip from 'ip';

@Controller()
export class AppController {
  @Get()
  getHello(): string {
    const _ip = ip.address();
    return _ip;
  }
}
