export default `
  input CatalogInput {
    name: String
    parentId: String
    icon: String
    orderIndex: Int
  }

  type Catalog {
    id: ID
    name: String
    parentId: String
    icon: String
    products: [Product]
  }

  type Query {
    catalogs(withRelated: [String], page: Int, pageSize: Int, limit: Int, offset: Int): [Catalog]
    catalog(id: ID!, withRelated: [String]): Catalog
  }

  type Mutation {
    updateCatalog(id: ID!, input: CatalogInput): Catalog
    deleteCatalog(id: ID!): Int
  }

`;
