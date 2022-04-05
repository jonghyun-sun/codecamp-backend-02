import {
  HttpException,
  HttpStatus,
  Injectable,
  UnprocessableEntityException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async findAll() {
    return await this.productRepository.find();
  }
  async findOne({ productId }) {
    return await this.productRepository.findOne({ id: productId });
  }

  async create({ createProductInput }) {
    // 상품을 데이터베이스에 저장
    const result = await this.productRepository.save({
      ...createProductInput,

      //하나하나 직접 나열하기
      // name: createProductInput.name,
      // description: createProductInput.description,
      // price: createProductInput.price,
    });
    console.log(result);

    return result;
  }

  async update({ productId, updateProductInput }) {
    const product = this.productRepository.findOne({
      where: { id: productId }, //product 조회
    });

    const newProduct = {
      ...product,
      ...updateProductInput,
    };

    return await this.productRepository.save(newProduct); //수정 저장
  }

  async checkSoldout({ productId }) {
    try {
      const product = await this.productRepository.findOne({
        where: { id: productId },
      });
    } catch (error) {
      throw error.message;
    }

    if (product.isSoldout)
      throw new UnprocessableEntityException('이미 판매 완료된 상품입니다. ');
    // if (product.isSoldout) {
    //   throw new HttpException(
    //     '이미 판매가 완료된 상품입니다.',
    //     HttpStatus.UNPROCESSABLE_ENTITY,
    //   ); //상태코드를 단어형태로 받아준다
    // }
  }
}
