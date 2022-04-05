import { NoticeCategory } from 'src/apis/noticeCategory/entities/noticeCategory.entity';
import { User } from 'src/apis/users/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Notice {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  contents: string;

  @ManyToOne(() => User)
  user: User;

  @ManyToOne(() => NoticeCategory)
  noticeCategory: NoticeCategory;
}
