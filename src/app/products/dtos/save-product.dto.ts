export class SaveProductDto {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  createdAt: Date;
  isAvailable: boolean;
}
