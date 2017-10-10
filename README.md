# yongbei

## TODO
- 封装 schema 中多处的
  ```js
  products(withRelated: [String], page: Int, pageSize: Int, limit: Int, offset: Int): [Product]
  ```
- 返回分页 meta 信息
- 检验 schema 有效性
  - connection 必须包含 first 或 last
- 使用枚举类型参数
- bookshelf withRelated能否传参数
- 可以对子查询添加限制条件
- sort 参数第二次查询时直接报错

## Docs
https://qails.github.io

## References

- [bookshelfjs docs](http://bookshelfjs.org)
- [knexjs docs](http://knexjs.org)
- [Joi docs](https://github.com/hapijs/joi)
- [koa-router docs](https://github.com/alexmingoia/koa-router)
