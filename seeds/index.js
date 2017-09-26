import casual from 'casual';
import uuid from 'uuid/v1';
import { random, range } from 'lodash';

const CATALOGS_AMT = 10;
const COMMENTS_AMT = 200;
const PRODUCTS_AMT = 60;
const USER_AMT = 10;

exports.seed = knex => knex('catalogs').truncate()
  .then(() => {
    const items = range(CATALOGS_AMT).map((val, index) => ({
      id: index,
      name: casual.title
    }));
    return knex('catalogs').insert(items);
  })
  .then(() => knex('comments').truncate())
  .then(() => {
    const items = range(COMMENTS_AMT).map(() => ({
      id: uuid(),
      content: casual.word,
      productId: random(1, PRODUCTS_AMT),
      userId: random(1, USER_AMT)
    }));
    return knex('comments').insert(items);
  })
  .then(() => knex('products').truncate())
  .then(() => {
    const items = range(PRODUCTS_AMT).map((val, index) => ({
      id: index,
      catalogId: random(1, CATALOGS_AMT),
      name: casual.word,
      salePrice: random(100, 3000),
      deposit: random(100, 3000),
      rent: random(1, 100),
      stockCount: random(1, 10),
      content: casual.word,
      orderIndex: random(PRODUCTS_AMT)
    }));
    return knex('products').insert(items);
  })
;
