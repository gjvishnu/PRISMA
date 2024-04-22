const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    characters:  [users]
  }
  type users {
    name : String
    image : String
  }

  input UserInput{
    title:String!
    content:String!
}
 
type Mutation{
    addUsers(detailsinp:UserInput):String
 
}

`;

module.exports = typeDefs;
