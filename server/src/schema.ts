import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Person {
    id: Int!
    name: String!
    attack: Int!
  }

  type Starship {
    id: Int!
    name: String!
    crew: Int!
    model: String!
  }

  type PaginatedPeople {
    people: [Person!]!
    total: Int!
  }

  type PaginatedStarships {
    starships: [Starship!]!
    total: Int!
  }

  type Query {
    people(page: Int = 1, limit: Int = 10): PaginatedPeople!
    starships(page: Int = 1, limit: Int = 10): PaginatedStarships!
  }
`; 