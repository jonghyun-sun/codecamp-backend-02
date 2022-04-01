const { ApolloServer, gql } = require('apollo-server');

// The GraphQL schema
const typeDefs = gql`
  input createBoardInput{
    writer:String
    title:String
    contents:String
  }
  type BoardReturn {
    number: Int
    writer: String
    titile: String
    contents: String
  }
  type Query {
    #fechBoards: [BoardReturn] =>객체 1개의미
    fetchBoards: [BoardReturn] #=> 배열안에 객체 1개 이상을 의미
   
    
  }
  type Mutation {
    createBoard(writer:String,title:String,contents:String):String
    createBoard2(createBoardInput:createBoardInput):String

  }
`;

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    fetchBoards:()=>{
      const result = [
        { number: 1, writer: "철수", title: "제목입니다~~", contents: "내용이에요@@@" },
        { number: 2, writer: "영희", title: "영희 제목입니다~~", contents: "영희 내용이에요@@@" },
        { number: 3, writer: "훈이", title: "훈이 제목입니다~~", contents: "훈이 내용이에요@@@" },
      ]

      return result
    }
  },
  Mutation:{
    createBoard:(_, args) => {
      console.log(args)
      return "등록에 성공하였습니다"

    },
    createBoard2:(_, args) => {
      console.log(args)
      return "등록에 성공하였습니다"

    }

  }
};



const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen(3001).then(({ url }) => {
  console.log(`🚀 Server ready at ${url} on port ${3001}`);
});