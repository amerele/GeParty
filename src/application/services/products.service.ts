import { Injectable } from '@nestjs/common';
import { ProductsRepository } from 'src/infraestructure/repositories/products.repository';
import { BodyProductsDto } from '../DTOs/products/body-products.dto';
import { FeedbacksRepository } from 'src/infraestructure/repositories/feedbacks.repository';

@Injectable()
export class ProductsService {
  constructor(
    private readonly _productsRepository: ProductsRepository,
    private readonly _feedbacksRepository: FeedbacksRepository,
  ) {}

  public async findAll() {
    try {
      const products = await this._productsRepository.findAll();

      const productsWithFeedbacks = await Promise.all(
        products.map(async (product) => {
          const feedbacks = await this._feedbacksRepository.findFeedbacks(
            product.id,
          );
          return { ...product, feedbacks };
        }),
      );
      return productsWithFeedbacks
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

  public async create(body: Partial<BodyProductsDto>) {
    try {
      const product = await this._productsRepository.create(body);
      await this._feedbacksRepository.insertDefaultValues(product[0].id);
      return;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  public async delete(id: number) {
    try {
      await this._feedbacksRepository.delete(id);
      return this._productsRepository.delete(id);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
