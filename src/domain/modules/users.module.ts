import { Module } from '@nestjs/common';
import { UsersController } from 'src/presentation/controllers/users.controller';
import { UsersRepository } from 'src/infraestructure/repositories/users.repository';
import { UsersService } from 'src/application/services/users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersRepository],
  exports: [UsersRepository, UsersService],
})
export class UsersModule {}
 