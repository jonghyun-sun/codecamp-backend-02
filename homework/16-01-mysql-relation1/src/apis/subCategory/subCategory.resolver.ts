import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { SubCategory } from './entities/subCategory.entity';
import { SubCategoryService } from './subCategory.service';

@Resolver()
export class SubCategoryResolver {
  constructor(private readonly subCategoryService: SubCategoryService) {}
  @Query(() => String) //graphql거 불러와야함
  sayHello(): string {
    return 'Hello World!';
  }
  @Mutation(() => SubCategory)
  async createProductCategory(
    @Args('name') name: string, //
  ) {
    return await this.subCategoryService.create({ name });
  }
}
