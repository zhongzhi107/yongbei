export default `
  input CatalogInput {
    name: String
    parentId: String
    icon: String
    orderIndex: Int
  }

  interface Search {
    pagination: Pagination
    pageInfo: PageInfo
    totalCount: Int
    cursor: String
  }

  type Catalog {
    id: ID
    name: String
    parentId: String
    icon: String
    products(withRelated: [String], page: Int, pageSize: Int, limit: Int, offset: Int, first: Int, where: [String], sort: [String]): [Product]
  }

  input WithRelated {
    name: String
    first: Int
    sort: [String]
    where: [String]
  }

  type Pagination {
    rowCount: Int
    pageCount: Int
    page: Int
    pageSize: Int
  }

  type PageInfo {
    endCursor: String
    count: Int
    page: Int
    limit: Int
    hasPrevPage: Boolean
    hasNextPage: Boolean
  }

  type Catalogs implements Search {
    pagination: Pagination
    pageInfo: PageInfo
    totalCount: Int
    cursor: String
    edges: [Catalog]
  }

  type Query {
    catalogs(withRelated: WithRelated, page: Int, pageSize: Int, limit: Int, offset: Int, first: Int, where: [String], sort: [String]): Catalogs
    catalog(id: ID!, withRelated: [String]): Catalog
  }

  type Mutation {
    updateCatalog(id: ID!, input: CatalogInput): Catalog
    deleteCatalog(id: ID!): Int
  }

`;
