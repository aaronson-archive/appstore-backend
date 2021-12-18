import 'reflect-metadata';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { AccountModule } from '@core/account';
import { AuthModule } from '@core/auth';

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
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply().forRoutes('*');
  }
}
