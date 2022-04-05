import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class NoticeCategory {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  categoryName: string;
}
