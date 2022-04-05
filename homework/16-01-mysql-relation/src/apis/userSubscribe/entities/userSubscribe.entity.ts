import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from 'src/apis/users/entities/user.entity';
import { Subscribe } from 'src/apis/subscribe/entities/subscribe.entity';
@Entity()
export class UserSubscribe {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User)
  user: User;

  @ManyToOne(() => Subscribe)
  subscribe: Subscribe;
}
