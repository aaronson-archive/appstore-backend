import 'reflect-metadata';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { GlobalConfigurationModule } from '@global/config';
import { GlobalTypeOrmModule } from '@global/typeorm';

@Module({
  imports: [GlobalConfigurationModule, GlobalTypeOrmModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply().forRoutes('*');
  }
}
