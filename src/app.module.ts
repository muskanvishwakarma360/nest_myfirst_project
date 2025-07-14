import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloController } from './hello/hello.controller';
import { WorldController } from './world/world.controller';

@Module({
  imports: [],
  controllers: [AppController, HelloController, WorldController],
  providers: [AppService],
})
export class AppModule {}
