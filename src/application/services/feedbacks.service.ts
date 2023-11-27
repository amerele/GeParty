import { Injectable } from '@nestjs/common';
import { FeedbacksRepository } from 'src/infraestructure/repositories/feedbacks.repository';
import { BodyFeedbacksDto } from '../DTOs/feedbacks/body-feedbacks.dto';

@Injectable()
export class FeedbacksService {
  constructor(private readonly _feedbacksRepository: FeedbacksRepository) {}

  public async findAll() {
    try {
      return this._feedbacksRepository.findAll();
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  public async findByPrimary(id: number) {
    try {
      return this._feedbacksRepository.findByPrimary(id);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  public async createOrUpdate(
    body: Partial<BodyFeedbacksDto>,
    id: number,
  ) {
    try {
      return this._feedbacksRepository.createOrUpdate(
        body,
        id,
      );
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  public async delete(id: number) {
    try {
      return this._feedbacksRepository.delete(id);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
