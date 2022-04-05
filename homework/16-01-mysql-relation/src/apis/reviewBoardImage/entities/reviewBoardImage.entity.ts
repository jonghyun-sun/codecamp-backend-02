import { ReviewBoard } from 'src/apis/reviewBoard/entities/reviewBoard.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ReviewBoardImage {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  reviewBoardImageUrl: string;

  @ManyToOne(() => ReviewBoard)
  reviewBoard: ReviewBoard;
}
