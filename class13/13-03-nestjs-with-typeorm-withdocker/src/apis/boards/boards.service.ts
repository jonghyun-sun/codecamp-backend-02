import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardService {
  // getHello(): string {
  //   return 'Hello World!';
  // }
  findAll() {
    //데이터를 꺼내왔다고 가정(db에 접속해서)

    return [
      {
        number: 1,
        writer: '철수',
        title: '제목입니다',
        contents: '내용입니다',
      },
      {
        number: 2,
        writer: '철수',
        title: '제목입니다',
        contents: '내용입니다',
      },
      {
        number: 3,
        writer: '철수',
        title: '제목입니다',
        contents: '내용입니다',
      },
    ];
  }
  create() {
    //데이터를 등록 했다고 가정(db에 접속해서)

    return '등록에 성공했습니다!';
  }
}
