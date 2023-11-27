import { Injectable } from '@nestjs/common';
import { Users } from 'src/domain/entities/users.entity';
import { BaseKnexRepository } from './base-knex.repository';
import { BodyUsersDto } from 'src/application/DTOs/users/Body-users.dto';

@Injectable()
export class UsersRepository extends BaseKnexRepository {
  public async findAll(): Promise<Users[]> {
    const knexInstance = await this.getKnexInstance();

    const users = await knexInstance('geparty.users').where('').select('*');

    await this.destroyConnection(knexInstance);
    return users;
  }

  public async findByPrimary(id: number): Promise<Users[]> {
    const knexInstance = await this.getKnexInstance();

    const users = await knexInstance('geparty.users')
      .where({ id })
      .select('*');

    await this.destroyConnection(knexInstance);
    return users;
  }

  public async createOrUpdate(
    data: BodyUsersDto,
    id: number,
  ): Promise<Users[]> {
    const knexInstance = await this.getKnexInstance();

    const users = await knexInstance('geparty.users')
      .upsert({ data, id })
      .returning('*');

    await this.destroyConnection(knexInstance);
    return users;
  }

  public async delete(id: number): Promise<void> {
    const knexInstance = await this.getKnexInstance();

    await knexInstance('geparty.users').where({ id }).del();

    await this.destroyConnection(knexInstance);
  }
}
 