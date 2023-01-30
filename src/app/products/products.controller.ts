import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  UsePipes,
} from '@nestjs/common';
import { SaveProductDto } from './dtos/save-product.dto';
import { UpdateProductDto } from './dtos/update-product.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Post()
  async create(@Body() body: SaveProductDto) {
    return await this.productService.create(body);
  }

  @Get()
  async findAll() {
    return await this.productService.findAll();
  }

  @Get(':id')
  @UsePipes(ParseUUIDPipe)
  async findById(@Param('id') id: string) {
    return await this.productService.findById(id);
  }

  @Delete(':id')
  @UsePipes(ParseUUIDPipe)
  async delete(@Param('id') id: string) {
    return await this.productService.delete(id);
  }

  @Patch(':id/update')
  async update(
    @Param('id')
    id: string,
    @Body() updateProduct: UpdateProductDto,
  ) {
    await this.productService.update({
      id,
      updateProduct,
    });

    const updatedProduct = await this.findById(id);

    return updatedProduct;
  }
}
