import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './products/products.controller';
import { CustomersController } from './customers/customers.controller';
import { ProductsService } from './products/products.service';
import { TagsModule } from './tags/tags.module';
import { ProductsModule } from './products/products.module';
import { Product } from './products/entities/product.entity';

@Module({
  imports: [
    ProductsModule,
    TagsModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'nestdb',
      retryDelay: 3000,
      autoLoadEntities: true,
      entities: [Product],
      synchronize: true,
    }),
  ],
  controllers: [AppController, ProductsController, CustomersController],
  providers: [AppService, ProductsService],
})
export class AppModule {}
