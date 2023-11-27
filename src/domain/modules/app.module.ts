import { Module } from '@nestjs/common';
import { KnexConnectModule } from 'src/infraestructure/knex config/knex.module';
import { AppController } from '../../presentation/controllers/app.controller';
import { FeedbacksController } from 'src/presentation/controllers/feedbacks.controller';
import { ProductsController } from 'src/presentation/controllers/products.controller';
import { UsersController } from 'src/presentation/controllers/users.controller';
import { FeedbacksService } from 'src/application/services/feedbacks.service';
import { ProductsService } from 'src/application/services/products.service';
import { UsersService } from 'src/application/services/users.service';
import { FeedbacksRepository } from 'src/infraestructure/repositories/feedbacks.repository';
import { ProductsRepository } from 'src/infraestructure/repositories/products.repository';
import { UsersRepository } from 'src/infraestructure/repositories/users.repository';

@Module({
  imports: [KnexConnectModule],
  controllers: [
    AppController,
    FeedbacksController,
    ProductsController,
    UsersController,
  ],
  providers: [
    FeedbacksService,
    ProductsService,
    UsersService,
    FeedbacksRepository,
    ProductsRepository,
    UsersRepository,
  ],
})
export class AppModule {}
