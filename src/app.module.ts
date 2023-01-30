import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './app/products/products.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ProductsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: process.env.DB_NAME,
      port: process.env.DB_PORT,
      password: process.env.DB_PASSWORD,
      username: process.env.DB_USERNAME,
      host: process.env.DB_HOST,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
