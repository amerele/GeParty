import { Injectable } from '@nestjs/common';
import { UsersRepository } from 'src/infraestructure/repositories/users.repository';
import { BodyUsersDto } from '../DTOs/users/body-users.dto';

@Injectable()
export class UsersService {
  constructor(private readonly _usersRepository: UsersRepository) {}

  public async findAll() {
    try {
      return this._usersRepository.findAll();
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  public async findByPrimary(id: number) {
    try {
      return this._usersRepository.findByPrimary(id);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  public async createOrUpdate(
    body: BodyUsersDto,
    id: number,
  ) {
    try {
      return this._usersRepository.createOrUpdate(
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
      return this._usersRepository.delete(id);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
