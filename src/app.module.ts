import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseProvider } from './config/database.config';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // make ConfigModule available globally
      envFilePath: ['.env'],
    }),
    TypeOrmModule.forRootAsync(databaseProvider),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
