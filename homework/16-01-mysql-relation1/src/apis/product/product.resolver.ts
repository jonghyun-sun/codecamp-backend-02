import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Product1 } from './entities/product.entity';
import { Product1Service } from './product.service';
import { CreateProductInput } from './dto/createProduct.input';
import { UpdateProductInput } from './dto/updateProduct.input';

@Resolver()
export class Product1Resolver {
  constructor(private readonly productService: Product1Service) {}
  @Query(() => String) //graphql거 불러와야함
  sayHello(): string {
    return 'Hello World!';
  }

  @Query(() => [Product1])
  fetchProducts() {
    //모두 조회
    return this.productService.findAll();
  }

  @Query(() => Product1)
  fetchProduct(@Args('productId') productId: string) {
    //하나 조회
    return this.productService.findOne({ productId });
  }
  @Mutation(() => Product1)
  createProduct(
    @Args('createProductInput') createProductInput: CreateProductInput, //
  ) {
    return this.productService.create({ createProductInput });
  }
  @Mutation(() => Product1)
  async updateProduct(
    @Args('productId') productId: string,
    @Args('updateProductInput') updateProductInput: UpdateProductInput,
  ) {
    return this.productService.update({ productId, updateProductInput });
  }
}
