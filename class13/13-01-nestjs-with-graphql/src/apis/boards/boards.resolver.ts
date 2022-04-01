import { Query, Resolver } from '@nestjs/graphql';
import { BoardService } from './Boards.service';

@Resolver()
export class BoardResolver {
  constructor(private readonly boardService: BoardService) {}

  @Query(() => String) //get 방식 //return 타입 정해주기//그래프 큐엘 타입(int Boolean)
  getHello(): string {
    //타입스크립트의 타입 (number boolean)
    return this.boardService.getHello();
  }
}
