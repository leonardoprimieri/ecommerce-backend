import { Test, TestingModule } from '@nestjs/testing';
import { SaveProductDto } from '../dtos/save-product.dto';
import { ProductEntity } from '../product.entity';
import { ProductsController } from '../products.controller';
import { ProductsService } from '../products.service';

describe('ProductsController', () => {
  let productController: ProductsController;
  let productService: ProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [
        {
          provide: ProductsService,
          useValue: {
            save: jest.fn(),
          },
        },
      ],
    }).compile();

    productController = module.get<ProductsController>(ProductsController);
    productService = module.get<ProductsService>(ProductsService);
  });

  it('should be defined', () => {
    expect(productController).toBeDefined();
    expect(productService).toBeDefined();
  });

  it('should save a product', async () => {
    const data: SaveProductDto = {
      createdAt: new Date(),
      description: 'description',
      id: 'id',
      image: 'image',
      isAvailable: true,
      name: 'name',
      price: 1,
      quantity: 1,
    };

    const productEntityMock = {
      ...data,
    } as ProductEntity;

    jest.spyOn(productService, 'save').mockResolvedValueOnce(productEntityMock);

    const result = await productService.save(data);

    expect(result).toEqual(productEntityMock);
    expect(productService.save).toBeCalledTimes(1);
  });
});
