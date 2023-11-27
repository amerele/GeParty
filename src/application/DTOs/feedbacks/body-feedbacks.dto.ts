import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class BodyFeedbacksDto {
  @IsNumber()
  id: number;
  @IsString()
  comment: string;
  @IsNumber()
  upvotes: number;
  @IsNumber()
  downvotes: number;

  constructor(
    id: number,
    comment: string,
    upvotes: number,
    downvotes: number
  ) {
    this.id = id;
    this.comment = comment;
    this.upvotes = upvotes;
    this.downvotes = downvotes;
  }
}
 