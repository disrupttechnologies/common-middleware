import { Controller, Get, Param } from '@nestjs/common';
import ip  from "ip";

@Controller()
export class AppController {
  constructor() {}

  @Get()
  getHello(): string {
    const _ip = ip.address()
    return _ip
  }

  
}
