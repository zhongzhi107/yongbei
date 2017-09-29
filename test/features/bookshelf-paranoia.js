import assert from 'assert';
import casual from 'casual';
import { knex, features } from 'qails';
import { model as Catalog } from '../../src/models/catalog';
import { model as Product } from '../../src/models/product';

const { MODEL_SOFTDELETE } = features;
const productId = casual.uuid;
const catalogId = casual.uuid;
// console.log(productId);
// console.log(catalogId);

let p1;
let p2;
let p3;
let p4;
let p5;
let c2;
let c4;

before(async () => {
  // 构建测试数据
  await new Catalog().save({ id: catalogId, name: casual.title });
  await new Product().save({
    id: productId,
    name: casual.title,
    catalogId,
    content: casual.text
  });

  p1 = await Product.forge({ id: productId }).fetch();

  c2 = await Catalog.forge({ id: catalogId }).fetch({ withRelated: 'products' });
  p2 = c2.related('products').findWhere({ id: productId });

  await Product.forge({ id: productId }).destroy();

  p3 = await Product.forge({ id: productId }).fetch();

  c4 = await Catalog.forge({ id: catalogId }).fetch({ withRelated: 'products' });
  p4 = c4.related('products').findWhere({ id: productId });

  p5 = await knex('products').select('*').where('id', productId);
});

after(async () => {
  await Catalog.forge({ id: catalogId }).destroy();
  await Product.forge({ id: productId }).destroy({ hardDelete: true });
});

describe('# bookshelf-paranoia', () => {
  if (MODEL_SOFTDELETE) {
    it('The record can be found before the delete action is executed', () => {
      assert.ok(p1);
    });

    it('The record can be found thought withRelated', () => {
      assert.ok(p2);
    });

    it('After the delete action is executed, the record can\'t be found', () => {
      assert.ok(p3 === null);
    });

    it('The record can\'t be found even thought withRelated', () => {
      assert.ok(p4 === undefined);
    });

    it('But we didn\'t delete it from the database', () => {
      assert.ok(p5);
    });
  } else {
    it.skip('配置文件中未启用改功能，跳过测试');
  }
});
