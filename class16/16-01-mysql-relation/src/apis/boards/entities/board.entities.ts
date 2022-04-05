import { Field, ObjectType, Int } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType() //써있는게 class 처럼 보이지만 무슨 타입인지 알려주는 거임
@Entity()
export class Board {
  @Field(() => Int) // =>바로 위에 주석
  @PrimaryGeneratedColumn('increment') //_id랑 같은거
  number: number;
  @Field(() => String)
  @Column()
  writer: string;
  @Field(() => String)
  @Column()
  title: string;
  @Field(() => String)
  @Column()
  contents: string;
}
