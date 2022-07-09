import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { ProductPatchDTO } from './dto/product-patch.dto';
import { ProductDTO } from './dto/product.dto';
import { Product } from './interfaces/product.interface';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getAllProducts(): Promise<Product[]> {
    return this.productsService.getAll();
  }

  @Get(':id')
  async find(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.getId(id);
  }

  @Post()
  createProduct(@Body() productDTO: ProductDTO) {
    this.productsService.insert(productDTO);
  }

  @Put(':id')
  async update(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
    @Body() body,
  ) {
    return this.productsService.update(id, body);
  }

  @Patch(':id')
  async patch(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: ProductPatchDTO,
  ) {
    return this.productsService.update(id, body);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id') id: number) {
    this.productsService.delete(id);
  }
}
