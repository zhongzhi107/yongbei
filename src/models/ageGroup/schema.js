export default `
  input AgeGroupInput {
    name: String
  }

  type AgeGroup {
    id: ID
    name: String
    products: [Product]
  }

  type Query {
    ageGroups(withRelated: [String], page: Int, pageSize: Int, limit: Int, offset: Int): [AgeGroup]
    ageGroup(id: ID!, withRelated: [String]): AgeGroup
  }

  type Mutation {
    updateAgeGroup(id: ID!, input: AgeGroupInput): AgeGroup
    deleteAgeGroup(id: ID!): Int
  }

`;
