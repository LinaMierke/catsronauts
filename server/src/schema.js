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
  type Author {
      id: ID!
      name: String!
      photo: String
  }
  type Query {
      "Get tracks array for homepage grid"
      tracksForHome: [Track!]
  }
`;

module.exports = typeDefs;
