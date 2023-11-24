import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class BodyProductsDto {
  @IsNumber()
  id: number;

  constructor(
    id: number,
  ) {
    this.id = id;
  }
}
 