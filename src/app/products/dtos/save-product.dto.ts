import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class SaveProductDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsNotEmpty()
  @IsString()
  image: string;

  @IsNotEmpty()
  @IsNumber()
  quantity: number;

  @IsOptional()
  isAvailable: boolean;

  @IsOptional()
  createdAt: Date;

  @IsOptional()
  id?: string;
}
