import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BoardService } from './Boards.service';
import { CreateBoardInput } from './dto/create.Board.input';
import { Board } from './entities/board.entities';

@Resolver()
export class BoardResolver {
  constructor(private readonly boardService: BoardService) {}

  @Query(() => [Board])
  fetchBoards() {
    return this.boardService.findAll(); //return 꼭해줘야함
  }

  @Mutation(() => String)
  createBoard(
    @Args('writer') writer: string, //프론트에서 받아오는것
    @Args('title') title: string,
    @Args('contents') content: string,
    @Args('createBoardInput') CreateBoardInput: string,
  ) {
    console.log(writer);
    console.log(CreateBoardInput);
    return this.boardService.create();
  }
}
