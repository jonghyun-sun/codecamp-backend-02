import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product1 } from './entities/product.entity';
import { CreateProductInput } from './dto/createProduct.input';
import { UpdateProductInput } from './dto/updateProduct.input';

interface ICreate {
  createProductInput: CreateProductInput;
}

interface IUpdate {
  productId: string;
  updateProductInput: UpdateProductInput;
}

@Injectable()
export class Product1Service {
  constructor(
    @InjectRepository(Product1)
    private readonly productRepository: Repository<Product1>,
  ) {}

  async create({ createProductInput }: ICreate) {
    // 카테고리를 데이터베이스에 저장
    const product = await this.productRepository.save({
      ...createProductInput,
    });
    console.log(product);

    return product;
  }

  async findAll() {
    const products = await this.productRepository.find();
    return products; //배열 안에 객체 형태로 반환
  }

  async findOne({ productId }) {
    const product = await this.productRepository.findOne({ id: productId });
    return product;
  }

  async update({ productId, updateProductInput }: IUpdate) {
    const product = await this.productRepository.findOne({ id: productId });
    const newProduct = { ...product, ...updateProductInput };
    const updatedProduct = await this.productRepository.save(newProduct);
    return updatedProduct;
  }
}
