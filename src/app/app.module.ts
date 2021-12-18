import 'reflect-metadata';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { AccountModule } from '@core/account';
import { AuthModule } from '@core/auth';
import { HospitalModule } from '@core/hospital';
import { GlobalConfigurationModule } from '@global/config';
import { GlobalJwtModule } from '@global/jwt';
import { GlobalTypeOrmModule } from '@global/typeorm';
import { CalendarModule } from 'src/calendar/calendar.module';
import { SurveyModule } from 'src/survey/survey.module';
import { ContentModule } from '@core/content/content.module';

@Module({
  imports: [
    GlobalConfigurationModule,
    GlobalJwtModule,
    GlobalTypeOrmModule,
    AccountModule,
    AuthModule,
    HospitalModule,
    CalendarModule,
    SurveyModule,
    ContentModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply().forRoutes('*');
  }
}
