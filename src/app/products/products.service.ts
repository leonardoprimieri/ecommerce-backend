import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SaveProductDto } from './dtos/save-product.dto';
import { ProductEntity } from './product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productsRepository: Repository<ProductEntity>,
  ) {}

  async save(data: SaveProductDto): Promise<ProductEntity> {
    return this.productsRepository.save(this.productsRepository.create(data));
  }
}
