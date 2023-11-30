import { Injectable } from '@nestjs/common';
import { Feedbacks } from 'src/domain/entities/feedbacks.entity';
import { BaseKnexRepository } from './base-knex.repository';
import { BodyFeedbacksDto } from 'src/application/DTOs/feedbacks/Body-feedbacks.dto';

@Injectable()
export class FeedbacksRepository extends BaseKnexRepository {
  
  public async findFeedbacks(product_id: number): Promise<Feedbacks[]> {
    const knexInstance = await this.getKnexInstance();

    const feedbacks = await knexInstance('geparty.feedbacks')
      .where({ product_id })
      .select("comment", "upvotes", "downvotes" );

    await this.destroyConnection(knexInstance);
    return feedbacks;
  }

  public async react(product_id: number, reaction: boolean): Promise<void> {
    const knexInstance = await this.getKnexInstance();

    await knexInstance('geparty.feedbacks').where({ product_id }).select('upvotes', 'downvotes');

    await this.destroyConnection(knexInstance);
    console.log(reaction)
  }
}
 