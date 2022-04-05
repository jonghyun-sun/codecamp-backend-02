import { Product1 } from 'src/apis/product/entities/product.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Subscribe {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  year: number;

  @Column()
  month: number;

  @Column()
  price: number;

  @Column()
  isActive: boolean;

  @JoinColumn()
  @ManyToMany(() => Product1, (product1) => product1.subscribe)
  product1: Product1[];
}
