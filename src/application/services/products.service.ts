import { Injectable } from '@nestjs/common';
import { ProductsRepository } from 'src/infraestructure/repositories/products.repository';
import { BodyProductsDto } from '../DTOs/products/body-products.dto';

@Injectable()
export class ProductsService {
  constructor(private readonly _productsRepository: ProductsRepository) {}

  public async findAll() {
    try {
      return this._productsRepository.findAll();
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  public async findByPrimary(id: number) {
    try {
      return this._productsRepository.findByPrimary(id);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  public async createOrUpdate(
    body: BodyProductsDto,
    id: number,
  ) {
    try {
      return this._productsRepository.createOrUpdate(
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
      return this._productsRepository.delete(id);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
