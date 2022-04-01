import { Injectable } from '@nestjs/common';

@Injectable()
export class StarbucksService {
  // getHello(): string {
  //   return 'Hello World!';
  // }
  findAll() {
    //데이터를 꺼내왔다고 가정(db에 접속해서)

    return [
      {
        number: "1",
        contents: '아메리카노',
        price: '1000',
        kcal: '5kcal',
        fat: '5g',
        protein: '10g',
        carborne: '3g',
        salt: '10mg',
        sugar: '20g',
        caffein: '50mg',
      },
      {
        number: "2",
        contents: '녹차',
        price: '1500',
        kcal: '6kcal',
        fat: '4g',
        protein: '10g',
        carborne: '3g',
        salt: '10mg',
        sugar: '20g',
        caffein: '50mg',
      },
      {
        number: "3",
        contents: '카페라뗴',
        price: '5000',
        kcal: '5kcal',
        fat: '10g',
        protein: '20g',
        carborne: '3g',
        salt: '6mg',
        sugar: '20g',
        caffein: '50mg',
      },
      {
        number: "4",
        contents: '모카',
        price: '2500',
        kcal: '20kcal',
        fat: '2g',
        protein: '10g',
        carborne: '3g',
        salt: '10mg',
        sugar: '20g',
        caffein: '50mg',
      },
      {
        number: "5",
        contents: '자몽에이드',
        price: '3000',
        kcal: '5kcal',
        fat: '5g',
        protein: '4g',
        carborne: '1g',
        salt: '5mg',
        sugar: '30g',
        caffein: '52mg',
      }
    ];
  }
  create() {
    //데이터를 등록 했다고 가정(db에 접속해서)

    return '등록에 성공했습니다!';
  }
}
