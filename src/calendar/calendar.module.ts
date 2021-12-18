import { Account } from '@core/account/entities';
import { AuthModule } from '@core/auth';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CalendarController } from './calendar.controller';
import { CalendarService } from './calendar.service';

@Module({
  imports: [TypeOrmModule.forFeature([Account]), AuthModule],
  controllers: [CalendarController],
  providers: [CalendarService],
  exports: [TypeOrmModule],
})
export class CalendarModule {}
