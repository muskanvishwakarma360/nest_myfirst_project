import { Controller, Get } from '@nestjs/common';

@Controller('world')
export class WorldController {
    @Get()
    getWorld(): string {
        return 'namaste world '
    }
}
