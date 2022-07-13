import { Module } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { ReviewsController } from './reviews.controller';
import { ProductsModule } from 'src/products/products.module';

@Module({
  imports: [ProductsModule], // Product, Review, Size
  providers: [ReviewsService],
  controllers: [ReviewsController],
})
export class ReviewsModule {}
