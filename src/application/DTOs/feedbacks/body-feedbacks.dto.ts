import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class BodyFeedbacksDto {
  @IsNumber()
  upvote: number;
  @IsNumber()
  downvote: number;

  constructor(
    upvotes: number,
    downvotes: number
  ) {
    this.upvote = upvotes;
    this.downvote = downvotes;
  }
}
 