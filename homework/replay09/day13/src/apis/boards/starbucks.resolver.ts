import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { StarbucksService } from './starbucks.service';
import { CreateStarbucksInput } from './dto/create.Starbucks.input';
import { Menu } from './entities/starbucks.entities';

@Resolver()
export class StarbucksResolver {
  constructor(private readonly starbucksService: StarbucksService) {}

  @Query(() => [Menu])
  fetchMenu() {
    return this.starbucksService.findAll(); //return 꼭해줘야함
  }

  @Mutation(() => String)
  creatStarbucks(
    @Args('createStarbucksInput') createStarbucksInput: CreateStarbucksInput,
  ): string {
    console.log(createStarbucksInput);
    return this.starbucksService.create();
  }
}
