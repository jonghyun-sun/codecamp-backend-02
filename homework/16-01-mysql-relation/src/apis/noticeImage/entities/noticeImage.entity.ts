import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Notice } from 'src/apis/notice/entities/notice.entity';

@Entity()
export class NoticeImage {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  imageUrl: string;

  @ManyToOne(() => Notice)
  notice: Notice;
}
//연결 안됨
