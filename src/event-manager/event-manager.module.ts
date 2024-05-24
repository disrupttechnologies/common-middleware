import { Module } from '@nestjs/common';
import { EventManagerService } from './event-manager.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [],
  providers: [EventManagerService],
})
export class EventManagerModule {}
