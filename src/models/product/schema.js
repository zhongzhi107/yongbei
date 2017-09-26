export default `
  type Product {
    id: ID
    catalogId: String
    name: String
    salePrice: Float
    deposit: Float
    rent: Float
    stockCount: Int
    content: String
    orderIndex: Int
  }

  type Query {
    products(withRelated: [String], page: Int, pageSize: Int, limit: Int, offset: Int): [Product]
    product(id: ID!, withRelated: [String]): Product
  }
`;
