export default `
  type Product {
    id: ID
    catalogId: String
    ageGroupId: Int
    countryId: Int
    name: String
    model: String
    size: String
    salePrice: Float
    deposit: Float
    rent: Float
    stockCount: Int
    content: String
    orderIndex: Int
    catalog: Catalog
    ageGroup: AgeGroup
    country: Country
  }

  type Query {
    products(withRelated: [String], page: Int, pageSize: Int, limit: Int, offset: Int): [Product]
    product(id: ID!, withRelated: [String]): Product
  }
`;
