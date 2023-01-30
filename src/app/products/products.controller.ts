import { Body, Controller, Get, Post } from '@nestjs/common';
import { SaveProductDto } from './dtos/save-product.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Post()
  async save(@Body() body: SaveProductDto) {
    return this.productService.save(body);
  }

  @Get()
  async findAll() {
    return this.productService.findAll();
  }
}
