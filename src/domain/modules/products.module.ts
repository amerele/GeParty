import { Module } from '@nestjs/common';
import { ProductsController } from 'src/presentation/controllers/products.controller';
import { ProductsRepository } from 'src/infraestructure/repositories/products.repository';
import { ProductsService } from 'src/application/services/products.service';

@Module({
  controllers: [ProductsController],
  providers: [ProductsRepository],
  exports: [ProductsRepository, ProductsService],
})
export class ProductsModule {}
 