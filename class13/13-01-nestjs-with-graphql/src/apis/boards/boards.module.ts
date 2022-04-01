import { Module } from '@nestjs/common';
import { BoardResolver } from './boards.resolver';
import { BoardService } from './Boards.service';

@Module({
  //   imports: [],
  //   controllers: [AppController],
  providers: [BoardResolver, BoardService],
})
export class BoardModule {}
