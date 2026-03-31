import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // swagger
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Online Course Management API')
    .setDescription('API Docs')
    .setVersion('1.0.0')
    .build();

  // generate swagger document when requested
  const documentFactory = () =>
    SwaggerModule.createDocument(app, swaggerConfig);
  // mount swagger UI at /api endpoint
  SwaggerModule.setup('api', app, documentFactory());

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
