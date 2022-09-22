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
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    credentials: true,
  });

  app.useGlobalFilters(new HttpExceptionFilter());

  await app.listen(3000, () => {
    console.log('http://localhost:3000');
  });

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}

create();
