import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './product.entity';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';

@Module({
  providers: [ProductsService],
  imports: [TypeOrmModule.forFeature([ProductEntity])],
  controllers: [ProductsController],
})
export class ProductsModule {}
