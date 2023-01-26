// index.js

// const { ApolloServer, gql } = require('apollo-server');
import { ApolloServer, gql } from 'apollo-server'
import { checkValidationPhone, getToken, sendTokenToSMS } from './phone.js';
// The GraphQL schema
const typeDefs = gql`
  type BoardReturn{
    number: Int
    writer: String
    title: String
    contents: String
  }
  type Query {
    # fetchBoards: BoardReturn => 객체 1개를 의미
    fetchBoards: [BoardReturn]
  }
  input CreateBoardInput{
    writer: String,
    title: String,
    contents: String
  }
  type Mutation{
    createBoard(createBoardInput: CreateBoardInput!):String
    createTokenOfPhone(myphone:String):String
  }
`;

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    fetchBoards: () => {
      const result =  [
        {
          number: 1,
          writer: '철수',
          title: '제목입니다~~',
          contents: '내용이에요@@@',
        },
        {
          number: 2,
          writer: '영희',
          title: '영희 제목입니다~~',
          contents: '영희 내용이에요@@@',
        },
        {
          number: 3,
          writer: '훈이',
          title: '훈이 제목입니다~~',
          contents: '훈이 내용이에요@@@',
        },
      ];
      return result;
    },
  },
  Mutation:{
    createBoard: (_, args)=>{
      console.log(args)

      return "게시물 등록에 성공하였습니다!";
    },
    createTokenOfPhone: (_, args)=>{
      console.log(args.myphone)
      const isValid = checkValidationPhone(args.myphone);
      if(isValid){
        const mytoken = getToken();
        sendTokenToSMS(args.myphone, mytoken);
        return mytoken
      }
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen(3000).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});