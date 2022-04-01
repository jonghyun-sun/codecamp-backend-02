import { Field, InputType ,Int } from '@nestjs/graphql';

@InputType()
export class CreateStarbucksInput {
  @Field(() => String)
  contents: string;

  @Field(() => Int )
  price: string;

  @Field(() => String)
  kcal: string;

  @Field(() => String)
  fat: string;

  @Field(() => String)
  protein: string;

  @Field(() => String)
  carborne: string;

  @Field(() => String)
  salt: string;
  
  @Field(() => String)
  sugar: string;

  @Field(() => String)
  caffein: string;
}
