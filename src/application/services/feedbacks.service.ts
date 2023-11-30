import { Injectable } from '@nestjs/common';
import { FeedbacksRepository } from 'src/infraestructure/repositories/feedbacks.repository';
import { BodyFeedbacksDto } from '../DTOs/feedbacks/body-feedbacks.dto';

@Injectable()
export class FeedbacksService {
  constructor(private readonly _feedbacksRepository: FeedbacksRepository) {}

  public async findFeedbacks(product_id: number) {
    try {
      return this._feedbacksRepository.findFeedbacks(product_id);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  public async react(product_id: number, reaction: boolean) {
    try {
      return this._feedbacksRepository.react(product_id, reaction);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  public async unreact(product_id: number, reaction: boolean) {
    try {
      return this._feedbacksRepository.unreact(product_id, reaction);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
