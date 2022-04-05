import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity() //엔티티라는 함수 안에 밑에 거 들어가있음
export class User {
  @PrimaryGeneratedColumn('uuid') //자동으로 pk만들어줌// uuid => 유니크한 중복되지 않은걸로 만들어줘
  id: string;

  @Column() /*type 쓰면 됨*/ email: string;

  @Column()
  password: string;
}
