import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class BodyProductsDto {
  @IsNumber()
  id: number;
  @IsString()
  name:string;
  @IsNumber()
  price:number;
  @IsString()
  reference: string;

  constructor(
    id: number,
    name: string,
    price: number,
    reference: string
  ) {
    this.id = id;
    this.name  = name;
    this.price = price;
    this.reference = reference;
  }
}
 