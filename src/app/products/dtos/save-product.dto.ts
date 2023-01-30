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
  imageUrl: string;

  @IsOptional()
  isAvailable: boolean;

  @IsOptional()
  createdAt: Date;

  @IsOptional()
  id?: string;
}
