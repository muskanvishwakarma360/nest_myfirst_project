// import { Controller } from '@nestjs/common';

// @Controller('hello')
// export class HelloController {}


import { Controller, Get } from '@nestjs/common';

@Controller('hello')
export class HelloController {
  @Get()
  getHello(): string {
    return 'Namaste from NestJS!';
  }
}
