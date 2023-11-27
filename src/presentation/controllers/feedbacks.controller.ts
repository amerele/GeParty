import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { Ok } from '../responses/success.types';
import { BodyFeedbacksDto } from 'src/application/DTOs/feedbacks/body-feedbacks.dto';
import { FeedbacksService } from 'src/application/services/feedbacks.service';

@Controller('/feedbacks')
export class FeedbacksController {
  constructor( 
    private readonly _feedbacksService: FeedbacksService
  ) {}
  
  @Get()
  public async findAll() {
    const feedbacks = this._feedbacksService.findAll();
    return Ok(feedbacks);
  }
  @Get()
  public async findByPrimary(@Param('id') id: number) {
    const feedbacks = this._feedbacksService.findByPrimary(id);
    return Ok(feedbacks);
  }
  @Post()
  public async add(
    @Body() body: BodyFeedbacksDto,
    @Param('id') id: number) {
    const feedbacks = this._feedbacksService.createOrUpdate(body, id);
    return feedbacks
  }
  @Put()
  public async update(@Body() body: Partial<BodyFeedbacksDto> , id: number) {
    const feedbacks = this._feedbacksService.createOrUpdate(body, id);
    return Ok(feedbacks);
  }
  @Delete()
  public async delete(@Param('id') id: number) {
    const feedbacks = this._feedbacksService.delete(
      id,
    );
    return Ok(feedbacks);
  }
}

 