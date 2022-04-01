import { ApolloServer, gql } from "apollo-server";

// The GraphQL schema //첫번째꺼는 플레이그라운드의 type detail 부분 만드는 거임 배열은 따로 안만들고 객체 안에 만든다
//BoardReturn 은 객체 하나 타입임(result의 넘버 1번 줄)
const mytypeDefs = gql`
  type BoardReturn { #백엔드에서 내보낼때는 type 씀
    number: Int
    writer: String
    title: String
    contents: String
  }
  input CreateBoardInput { #프론트에서 받아올때는 input 씀
    writer: String
    title: String
    contents: String
  }
  #(ts주석)fetchBoards: BoardReturn => 객체 한개
  type Query {
    fetchBoards: [BoardReturn] # => 배열 안에 객체 1개 이상을 의미 //
  }

  type Mutation {
    createBoard(writer: String, title: String, contents: String): String #넣는 데이터 타입 정해줘야 한다
    createBoard2(createBoardInput: CreateBoardInput): String
  }
`; //그래프 큐엘 타입 => 쿼리에서 hello 요청하면 string형태로 나올거임 //플레이그라운드 독스 처음 눌렀을때 나오는거 //스웨거랑 같은 거임
//타입은 String Int Boolean Id 정도 밖에 없어서 만들어줘야한다(ex 배열안에 객체) => 그래프큐엘은 타입에 엄격해서
/*골라받을 수 있음 => ex fetchBoards{
    writer
    title
}*/

// A map of functions which return data for the schema.
const myresolvers = {
  Query: {
    fetchBoards: () => {
      //리턴이란 글자 생략된거임 =>hello 요청하면 "world"나올거임
      //db에 접속해서 데이터 꺼내오기
      const result = [
        {
          number: 1,
          writer: "철수",
          title: "제목입니다~~",
          contents: "내용이에요@@@",
        },
        {
          number: 2,
          writer: "영희",
          title: "영희 제목입니다~~",
          contents: "영희 내용이에요@@@",
        },
        {
          number: 3,
          writer: "훈이",
          title: "훈이 제목입니다~~",
          contents: "훈이 내용이에요@@@",
        },
      ]; //db 데이터라고 가정

      //꺼내온 결과 응답주기
      return result;
    },
  },

  Mutation: {
    createBoard: (_, args) => {
      //안쓰는 애들은 _로 표현
      //db에 접속해서 데이터 저장하기
      console.log(args); //낱개로 찍힘
      //저장결과 알려주기
      return "등록에 성공하였습니다";
    }, //mutation 객체 안에 넣는 거라 ,찍어줘야함
    createBoard2: (_, args) => {
      //안쓰는 애들은 _로 표현
      //db에 접속해서 데이터 저장하기
      console.log(args); //객체로 묶여서 찍힘
      //저장결과 알려주기
      return "등록에 성공하였습니다";
    },
  },
};

const server = new ApolloServer({
  //아폴로 서버를 킨다
  typeDefs: mytypeDefs, //자바스크립트는 키와 벨류가 같으면 생략 가능 => shorthand property
  resolvers: myresolvers,
});

server.listen(3001).then(({ url }) => {
  //포트
  console.log(`🚀 Server ready at ${url}`);
});
