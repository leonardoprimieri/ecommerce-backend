import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { ProductEntity } from './entities/product.entity';

@Module({
  providers: [ProductsService],
  imports: [TypeOrmModule.forFeature([ProductEntity])],
  controllers: [ProductsController],
})
export class ProductsModule {}
