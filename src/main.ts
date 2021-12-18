import { NestFactory } from '@nestjs/core';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '@app/app.module';
import { LoggerService } from '@utils/logger';
import { HttpExceptionFilter } from '@utils/exceptions';

declare const module: any;

async function create() {
  const app: INestApplication = await NestFactory.create(AppModule, {
    logger: new LoggerService(),
  });

  app.enableCors({
    origin: ['http://localhost'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  });

  app.useGlobalFilters(new HttpExceptionFilter());

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}

create();
