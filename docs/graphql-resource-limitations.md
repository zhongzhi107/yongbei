# GraphQL resource limitations

## Node limit

所有请求必须符合以下标准才能通过 schema 校验：

- 客户端对connection 调用时必须提供 `first` 或 `last` 参数。
- `first` 或 `last` 参数必须在 1-100 之间
- 一次请求总节点数不能超过 50 万个
- 支持的参数
  - withRelated: [String] 关联对象
  - page: Int 当前页码
  - pageSize: Int 每页记录数量，和 page 为一组
  - limit: Int 限制返回记录数
  - offset: Int 返回位置的偏移量，和 limit 为一组
  - first: Int 返回最开始的第 N 条记录
  - after: String 从当前游标位置返回，和first 为一组
  - where: [String] SQL where 条件
  - sort: [String] 排序方式，减号开头表示倒序

```js
// qails 约定的格式
{
  catalogs(withRelated: {name: "products", first: 20, sort: ["-name", "id"], where: ["id", ">", "40"]}, first: 3, where: ["id", ">", "10"]) {
    edges {
      id
      name
      products {
        id
        name
      }
    }
  }
}

// github 给定的格式
query {
  viewer {
    repositories(first: 50) {
      edges {
        repository:node {
          name

          issues(first: 10) {
            totalCount
            edges {
              node {
                title
                bodyHTML
              }
            }
          }
        }
      }
    }
  }
}
```
