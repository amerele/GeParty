import { Injectable } from '@nestjs/common';
import { Products } from 'src/domain/entities/products.entity';
import { BaseKnexRepository } from './base-knex.repository';
import { BodyProductsDto } from 'src/application/DTOs/products/Body-products.dto';

@Injectable()
export class ProductsRepository extends BaseKnexRepository {
  public async findAll(): Promise<Products[]> {
    const knexInstance = await this.getKnexInstance();

    const products = await knexInstance
    .select('*')
    .from('products');

    await this.destroyConnection(knexInstance);
    return products;
  }

  public async findByPrimary(id: number): Promise<Products[]> {
    const knexInstance = await this.getKnexInstance();

    const products = await knexInstance
      .from('products')
      .where({ id })
      .select('*');

    await this.destroyConnection(knexInstance);
    return products;
  }

  public async create(
    data: Partial<BodyProductsDto>,
  ): Promise<Products[]> {
    const knexInstance = await this.getKnexInstance();

    const products = await knexInstance
      .from('products')
      .insert( data )
      .returning('*');

    await this.destroyConnection(knexInstance);
    return products;
  }

  public async delete(id: number): Promise<void> {
    const knexInstance = await this.getKnexInstance();

    await knexInstance
    .from('products')
    .where({ id })
    .del();

    await this.destroyConnection(knexInstance);
  }
}
 