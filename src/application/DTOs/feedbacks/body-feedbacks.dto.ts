import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class BodyFeedbacksDto {
  @IsNumber()
  id: number;

  constructor(
    id: number,
  ) {
    this.id = id;
  }
}
 