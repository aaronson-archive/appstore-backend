import { Account } from '@core/account/entities';
import { AuthModule } from '@core/auth';
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CalendarController } from './calendar.controller';
import { CalendarService } from './calendar.service';
import { CalendarRepository } from './calender.repository';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    TypeOrmModule.forFeature([Account]),
    AuthModule,
  ],
  controllers: [CalendarController],
  providers: [CalendarRepository, CalendarService],
  exports: [TypeOrmModule],
})
export class CalendarModule {}
