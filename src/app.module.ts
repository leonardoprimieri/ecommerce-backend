import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    ProductsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: 'postgres-ecommerce',
      port: 9902,
      password: 'postgres',
      username: 'postgres',
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
