import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class BodyProductsDto {
  @IsString()
  name:string;
  @IsNumber()
  price:number;
  @IsString()
  reference: string;

  constructor(
    name: string,
    price: number,
    reference: string
  ) {
    this.name  = name;
    this.price = price;
    this.reference = reference;
  }
}
 