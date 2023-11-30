import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Query,
  Patch
} from '@nestjs/common';
import { Ok } from '../responses/success.types';
import { FeedbacksService } from 'src/application/services/feedbacks.service';

@Controller('/feedbacks')
export class FeedbacksController {
  constructor(private readonly _feedbacksService: FeedbacksService) {}

  @Get('/:id')
  public async findFeedbacks(@Param('id') product_id: number) {
    const feedbacks = await this._feedbacksService.findFeedbacks(product_id);
    return Ok(feedbacks);
  }
  @Put('/:product_id/:reaction')
  public async react(
    @Param('product_id') product_id: number,
    @Param('reaction') reaction: boolean,
  ) {
    const feedbacks = this._feedbacksService.react(product_id, reaction);
    return feedbacks;
  }
  @Patch('/:product_id/:reaction')
  public async unreact(
    @Param('product_id') product_id: number,
    @Param('reaction') reaction: boolean,
  ) {
    const feedbacks = this._feedbacksService.unreact(product_id, reaction);
    return feedbacks;
  }
}
