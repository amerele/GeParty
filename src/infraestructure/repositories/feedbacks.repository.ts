import { Injectable } from '@nestjs/common';
import { Feedbacks } from 'src/domain/entities/feedbacks.entity';
import { BaseKnexRepository } from './base-knex.repository';
import { BodyFeedbacksDto } from 'src/application/DTOs/feedbacks/Body-feedbacks.dto';

@Injectable()
export class FeedbacksRepository extends BaseKnexRepository {
  public async findAll(): Promise<Feedbacks[]> {
    const knexInstance = await this.getKnexInstance();
  
    const feedbacks = await knexInstance('TABELA.feedbacks').where('').select('*');
  
    await this.destroyConnection(knexInstance);
    return feedbacks;
  }
  

  public async findByPrimary(id: number): Promise<Feedbacks[]> {
    const knexInstance = await this.getKnexInstance();

    const feedbacks = await knexInstance('TABELA.feedbacks')
      .where({ id })
      .select('*');

    await this.destroyConnection(knexInstance);
    return feedbacks;
  }

  public async createOrUpdate(
    data: BodyFeedbacksDto,
    id: number,
  ): Promise<Feedbacks[]> {
    const knexInstance = await this.getKnexInstance();

    const feedbacks = await knexInstance('TABELA.feedbacks')
      .upsert({ data, id })
      .returning('*');

    await this.destroyConnection(knexInstance);
    return feedbacks;
  }

  public async delete(id: number): Promise<void> {
    const knexInstance = await this.getKnexInstance();

    await knexInstance('TABELA.feedbacks').where({ id }).del();

    await this.destroyConnection(knexInstance);
  }
}
 