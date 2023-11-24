import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class BodyUsersDto {
  @IsNumber()
  id: number;

  constructor(
    id: number,
  ) {
    this.id = id;
  }
}
 