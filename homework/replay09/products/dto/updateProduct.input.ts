import { Field, InputType, Int, PartialType } from '@nestjs/graphql';
import { createProductInput } from './createProduct.input';

@InputType()
export class UpdateProductInput extends PartialType(createProductInput) {
  //partialtype(있어도 되고 없어도 되는애)로 가지고 온다
  @Field(() => String)
  name: string;
  @Field(() => String)
  description: string;
  @Field(() => Int)
  price: number;
}
