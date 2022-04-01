import { Field, ObjectType, Int } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType() //써있는게 class 처럼 보이지만 무슨 타입인지 알려주는 거임
@Entity() //데코레이터를 작성해줘야 typeorm이 데이터가 db에 들어간다고 알 수 있다.
export class Menu {
  
  @Field(() => Int) // =>바로 위에 주석
  @PrimaryGeneratedColumn('increment') //_id랑 같은거//프라이머리 컬럼으로 설정 //(increment=> 하나씩 증가)
  number: number;
  
  @Field(() => String) // graphql
  @Column()
  contents: string; //type script
  
  @Field(() => Int)
  @Column()
  price: number;
  
  @Field(() => String)
  @Column()
  kcal: string;
  
  @Field(() => String)
  @Column()
  fat: string;
  
  @Field(() => String)
  @Column()
  protein: string;

  @Field(() => String)
  @Column()
  carborne: string;
  
  @Field(() => String)
  @Column()
  salt: string;

  @Field(() => String)
  @Column()
  sugar: string;
  
  @Field(() => String)
  @Column()
  caffein: string;
}
