import 'reflect-metadata';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { AccountModule } from '@core/account';
import { AuthModule } from '@core/auth';
import { HospitalModule } from '@core/hospital';

import { GlobalConfigurationModule } from '@global/config';
import { GlobalJwtModule } from '@global/jwt';
import { GlobalTypeOrmModule } from '@global/typeorm';
import { CalendarModule } from 'src/calendar/calendar.module';
import { ContentsModule } from 'src/contents/contents.module';
import { SurveyModule } from 'src/survey/survey.module';

@Module({
  imports: [
    GlobalConfigurationModule,
    GlobalJwtModule,
    GlobalTypeOrmModule,
    AccountModule,
    AuthModule,
    HospitalModule,
    CalendarModule,
    ContentsModule,
    SurveyModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply().forRoutes('*');
  }
}
