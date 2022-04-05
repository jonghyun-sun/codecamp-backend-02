import { UserSubscribe } from 'src/apis/userSubscribe/entities/userSubscribe.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  paymentComplete: boolean;

  @Column()
  shippingComplete: boolean;

  @JoinColumn()
  @OneToOne(() => UserSubscribe)
  userSubscribe: UserSubscribe;
}
