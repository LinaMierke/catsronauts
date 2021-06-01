const { gql } = require("apollo-server");

const typeDefs = gql`
  type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: Int
    length: Int
    modulesCount: Int
  }
`;

module.exports = typeDefs;
