import { SubCategory } from 'src/apis/subCategory/entities/subCategory.entity';
import { Subscribe } from 'src/apis/subscribe/entities/subscribe.entity';
import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Product1 {
  //product가 자꾸 db에 혼자 만들어져서 product1으로 만들었습니다
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @ManyToOne(() => SubCategory)
  subCategory: SubCategory;

  @ManyToMany(() => Subscribe, (subscribe) => subscribe.product1)
  subscribe: Subscribe[];
}
//다대다 연결이 안되요...
