import { UserSubscribe } from 'src/apis/userSubscribe/entities/userSubscribe.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class ReviewBoard {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  reviewBoard: number;

  @Column()
  reiveweBoardContents: string;

  @JoinColumn()
  @OneToOne(() => UserSubscribe)
  userSubscribe: UserSubscribe;
}
