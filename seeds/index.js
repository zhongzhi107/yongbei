import casual from 'casual';
import { random, range } from 'lodash';

const CATALOGS_AMT = 10;
const COMMENTS_AMT = 200;
const PRODUCTS_AMT = 60;
const USER_AMT = 10;
const AGE_GROUPS = ['0-3', '3-6', '6-12', '12-99'];
const COUNTRIES = ['中国', '韩国', '日本', '美国', '澳大利亚'];

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
      id: casual.uuid,
      content: casual.text,
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
      ageGroupId: random(1, AGE_GROUPS.length),
      countryId: random(1, COUNTRIES.length),
      name: casual.title,
      model: casual.word,
      size: casual.word,
      salePrice: random(100, 3000),
      deposit: random(100, 3000),
      rent: random(1, 100),
      stockCount: random(1, 10),
      content: casual.text,
      orderIndex: random(PRODUCTS_AMT)
    }));
    return knex('products').insert(items);
  })
  .then(() => knex('ageGroups').truncate())
  .then(() => {
    const items = AGE_GROUPS.map((val, index) => ({
      id: index + 1,
      name: val
    }));
    return knex('ageGroups').insert(items);
  })
  .then(() => knex('countries').truncate())
  .then(() => {
    const items = COUNTRIES.map((val, index) => ({
      id: index + 1,
      name: val
    }));
    return knex('countries').insert(items);
  })
;
