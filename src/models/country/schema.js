export default `
  input CountryInput {
    name: String
  }

  type Country {
    id: ID
    name: String
    products: [Product]
  }

  type Query {
    countries(withRelated: [String], page: Int, pageSize: Int, limit: Int, offset: Int): [Country]
    country(id: ID!, withRelated: [String]): Country
  }

  type Mutation {
    updateCountry(id: ID!, input: CountryInput): Country
    deleteCountry(id: ID!): Int
  }

`;
