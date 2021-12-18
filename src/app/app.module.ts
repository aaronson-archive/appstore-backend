import 'reflect-metadata';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { AccountModule } from '@core/account';
import { AuthModule } from '@core/auth';
import { HospitalModule } from '@core/hospital';

import { GlobalConfigurationModule } from '@global/config';
import { GlobalJwtModule } from '@global/jwt';
import { GlobalTypeOrmModule } from '@global/typeorm';

@Module({
  imports: [
    GlobalConfigurationModule,
    GlobalJwtModule,
    GlobalTypeOrmModule,
    AccountModule,
    AuthModule,
    HospitalModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply().forRoutes('*');
  }
}
