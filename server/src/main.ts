import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import * as dotenv from 'dotenv'
dotenv.config()

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors:true});
  app.useGlobalPipes(new ValidationPipe());
  const config = new DocumentBuilder()
    .setTitle('TNO Database calls')
    .setDescription('API calls used for creating and reading historic simulation data.')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  // app.enableCors(
  //   { 
  //     origin: ['*'],
  //     methods: ['POST', 'PUT', 'DELETE', 'GET']
  //   }
  // );
  await app.listen(`${process.env.PORT}`, `${process.env.HOST}`);
}
bootstrap();
