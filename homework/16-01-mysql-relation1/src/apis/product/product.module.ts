import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product1 } from './entities/product.entity';
import { Product1Resolver } from './product.resolver';
import { Product1Service } from './product.service';

@Module({
  imports: [TypeOrmModule.forFeature([Product1])],
  providers: [
    Product1Service, //
    Product1Resolver,
  ],
})
export class ProductModule {}
