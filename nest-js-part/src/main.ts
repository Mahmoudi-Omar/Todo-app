import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors());
  const corsOption = {
    methods: 'GET,PUT,POST,DELETE,UPDATE,OPTIONS',

    credentials: true,
};
  app.enableCors(corsOption);
  await app.listen(5000);
}
bootstrap();
