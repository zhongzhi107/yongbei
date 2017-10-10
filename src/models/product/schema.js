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

  type Products implements Search {
    pagination: Pagination
    pageInfo: PageInfo
    totalCount: Int
    cursor: String
    edges: [Product]
  }

  type Query {
    products(withRelated: [String], page: Int, pageSize: Int, limit: Int, offset: Int): Products
    product(id: ID!, withRelated: [String]): Product
  }
`;
