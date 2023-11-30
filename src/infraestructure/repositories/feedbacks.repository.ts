import { Injectable } from '@nestjs/common';
import { Feedbacks } from 'src/domain/entities/feedbacks.entity';
import { BaseKnexRepository } from './base-knex.repository';
import { BodyFeedbacksDto } from 'src/application/DTOs/feedbacks/Body-feedbacks.dto';

@Injectable()
export class FeedbacksRepository extends BaseKnexRepository {
  public async findFeedbacks(product_id: number): Promise<any> {
    const knexInstance = await this.getKnexInstance();

    const feedbacks = await knexInstance
      .from('feedbacks')
      .select('comment','upvotes', 'downvotes')
      .where({ product_id })


      const response = Object.keys(feedbacks[0]).reduce((acc, key) => {
        const value = feedbacks[0][key];
        if (value !== null && value !== 0) {
          acc[key] = value;
        }
        return acc;
      }, {});
    await this.destroyConnection(knexInstance);
    return response;
  }

  public async react(product_id: number, reaction: boolean): Promise<void> {
    const knexInstance = await this.getKnexInstance();

    await knexInstance
      .from('feedbacks')
      .where({ product_id })
      .increment(reaction === true ? 'upvotes' : 'downvotes', 1)
      .returning('*');

    await this.destroyConnection(knexInstance);
  }
  public async unreact(product_id: number, reaction: boolean): Promise<void> {
    const knexInstance = await this.getKnexInstance();

    await knexInstance
      .from('feedbacks')
      .where({ product_id })
      .decrement(reaction === true ? 'upvotes' : 'downvotes', 1)
      .returning('*');

    await this.destroyConnection(knexInstance);
  }
  public async insertDefaultValues(product_id: number): Promise<void> {
    const knexInstance = await this.getKnexInstance();

    await knexInstance.from('feedbacks').insert({ product_id });

    await this.destroyConnection(knexInstance);
  }

  public async delete(product_id: number): Promise<void> {
    const knexInstance = await this.getKnexInstance();

    await knexInstance.from('feedbacks').where({ product_id }).del();

    await this.destroyConnection(knexInstance);
  }
}
