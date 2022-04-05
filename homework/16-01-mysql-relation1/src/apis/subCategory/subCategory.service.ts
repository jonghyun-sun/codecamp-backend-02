import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SubCategory } from './entities/subCategory.entity';

@Injectable()
export class SubCategoryService {
  constructor(
    @InjectRepository(SubCategory)
    private readonly subCategoryRepository: Repository<SubCategory>,
  ) {}

  async create({ name }) {
    // 카테고리를 데이터베이스에 저장
    const result = await this.subCategoryRepository.save({ name });
    console.log(result);

    return result;
  }
}
