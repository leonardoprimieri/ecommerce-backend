import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SaveProductDto } from './dtos/save-product.dto';
import { UpdateProductDto } from './dtos/update-product.dto';
import { ProductEntity } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productsRepository: Repository<ProductEntity>,
  ) {}

  async create(data: SaveProductDto): Promise<ProductEntity> {
    return await this.productsRepository.save(
      this.productsRepository.create(data),
    );
  }

  async findAll(): Promise<ProductEntity[]> {
    return await this.productsRepository.find({
      where: {
        isAvailable: true,
      },
    });
  }

  async findById(id: string): Promise<ProductEntity> {
    const product = await this.productsRepository.findOne(id);

    if (!product) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }

    return product;
  }

  async delete(id: string): Promise<{ message: string }> {
    const product = await this.findById(id);

    if (!product) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }

    await this.productsRepository.softDelete(id);

    return {
      message: `Product with id ${id} deleted`,
    };
  }

  async update({
    updateProduct,
    id,
  }: {
    id: string;
    updateProduct: UpdateProductDto;
  }) {
    await this.productsRepository.update(id, updateProduct);
  }
}
