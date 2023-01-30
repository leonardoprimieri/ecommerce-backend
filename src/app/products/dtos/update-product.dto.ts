import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateProductDto {
  @IsNotEmpty()
  @IsString()
  name?: string;

  @IsNotEmpty()
  @IsString()
  description?: string;

  @IsNotEmpty()
  @IsNumber()
  price?: number;

  @IsNotEmpty()
  @IsString()
  image?: string;

  @IsOptional()
  isAvailable?: boolean;
}
