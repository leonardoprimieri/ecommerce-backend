import { TestingModule, Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SaveProductDto } from '../dtos/save-product.dto';
import { ProductEntity } from '../entities/product.entity';
import { ProductsService } from '../products.service';

describe('ProductService', () => {
  let productService: ProductsService;
  let productRepository: Repository<ProductEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductsService,
        {
          provide: getRepositoryToken(ProductEntity),
          useValue: {
            create: jest.fn(),
            save: jest.fn(),
          },
        },
      ],
    }).compile();

    productService = module.get<ProductsService>(ProductsService);
    productRepository = module.get(getRepositoryToken(ProductEntity));
  });

  it('should be defined', () => {
    expect(productService).toBeDefined();
    expect(productRepository).toBeDefined();
  });

  it('should create a new product', async () => {
    const data: SaveProductDto = {
      createdAt: new Date(),
      description: 'description',
      id: 'id',
      image: 'image',
      isAvailable: true,
      name: 'name',
      price: 1,
    };

    const productEntityMock = {
      ...data,
    } as ProductEntity;

    jest
      .spyOn(productRepository, 'create')
      .mockReturnValueOnce(productEntityMock);

    jest
      .spyOn(productRepository, 'save')
      .mockResolvedValueOnce(productEntityMock);

    const result = await productService.create(data);

    expect(result).toEqual(productEntityMock);
    expect(productRepository.create).toBeCalledTimes(1);
    expect(productRepository.save).toBeCalledTimes(1);
  });
});
