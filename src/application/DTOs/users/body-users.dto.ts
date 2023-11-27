import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class BodyUsersDto {
  @IsNumber()
  id: number;
  @IsString()
  name:string;
  @IsString()
  password: string;

  constructor(
    id: number,
    name: string,
    password: string
  ) {
    this.id = id;
    this.name = name;
    this.password = password;
  }
}
 