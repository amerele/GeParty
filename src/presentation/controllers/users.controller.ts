import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { Ok } from '../responses/success.types';
import { BodyUsersDto } from 'src/application/DTOs/users/body-users.dto';
import { UsersService } from 'src/application/services/users.service';

@Controller('/users')
export class UsersController {
  constructor( 
    private readonly _usersService: UsersService
  ) {}
  
  @Get()
  public async findAll() {
    const users = this._usersService.findAll();
    return Ok(users);
  }
  @Get('/:id')
  public async findByPrimary(@Param('id') id: number) {
    const users = this._usersService.findByPrimary(id);
    return Ok(users);
  }
  @Post()
  public async add(
    @Body() body: BodyUsersDto,
    @Param('id') id: number) {
    const users = this._usersService.createOrUpdate(body, id);
    return users
  }
  @Put()
  public async update(@Body() body: BodyUsersDto, id: number) {
    const users = this._usersService.createOrUpdate(body, id);
    return Ok(users);
  }
  @Delete()
  public async delete(@Param('id') id: number) {
    const users = this._usersService.delete(
      id,
    );
    return Ok(users);
  }
}

 