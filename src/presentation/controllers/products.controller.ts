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
import { Created, Ok } from '../responses/success.types';
import { BodyProductsDto } from 'src/application/DTOs/products/body-products.dto';
import { ProductsService } from 'src/application/services/products.service';

@Controller('/products')
export class ProductsController {
  constructor( 
    private readonly _productsService: ProductsService
  ) {}
  
  @Get()
  public async findAll() {
    const products = await this._productsService.findAll()
    return Ok(products);
  }
  @Get(':id')
  public async findByPrimary(@Param('id') id: number) {
    const products = await this._productsService.findByPrimary(id);
    return Ok(products);
  }
  @Post()
  public async add(
    @Body() body: BodyProductsDto) {
    const products = await this._productsService.create(body);
    return Created(products)
  }
  @Put()
  public async update(@Body() body: Partial<BodyProductsDto>, id: number) {
    //const products = this._productsService.update(body, id);
    //return Ok(products);
  }
  @Delete()
  public async delete(@Param('id') id: number) {
    const products = await this._productsService.delete(
      id,
    );
    return Ok(products);
  }
}

 