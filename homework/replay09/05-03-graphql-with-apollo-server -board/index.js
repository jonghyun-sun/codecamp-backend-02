import { ApolloServer, gql } from "apollo-server";

// The GraphQL schema
const mytypeDefs = gql`
  type Query {
    "A simple type for getting started!"
    hello: Int
    fetchBoardsCount: Int!
  }
`; //그래프 큐엘 타입 => 쿼리에서 hello 요청하면 string형태로 나올거임 //플레이그라운드 독스 처음 눌렀을때 나오는거 //스웨거랑 같은 거임

// A map of functions which return data for the schema.
const myresolvers = {
  Query: {
    hello: () => 10, //리턴이란 글자 생략된거임 =>hello 요청하면 "world"나올거임
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
