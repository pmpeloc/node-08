import { PartialType } from '@nestjs/mapped-types';
import { ProductDTO } from './product.dto';

export class ProductPatchDTO extends PartialType(ProductDTO) {}
