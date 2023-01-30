import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  UsePipes,
} from '@nestjs/common';
import { SaveProductDto } from './dtos/save-product.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Post()
  async create(@Body() body: SaveProductDto) {
    return this.productService.create(body);
  }

  @Get()
  async findAll() {
    return this.productService.findAll();
  }

  @Get(':id')
  @UsePipes(ParseUUIDPipe)
  async findById(@Param('id') id: string) {
    return this.productService.findById(id);
  }

  @Delete(':id')
  @UsePipes(ParseUUIDPipe)
  async delete(@Param('id') id: string) {
    return this.productService.delete(id);
  }
}
