import { Module } from '@nestjs/common';
import { FeedbacksController } from 'src/presentation/controllers/feedbacks.controller';
import { FeedbacksRepository } from 'src/infraestructure/repositories/feedbacks.repository';
import { FeedbacksService } from 'src/application/services/feedbacks.service';

@Module({
  controllers: [FeedbacksController],
  providers: [FeedbacksRepository],
  exports: [FeedbacksRepository, FeedbacksService],
})
export class FeedbacksModule {}
 