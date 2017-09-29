import assert from 'assert';
import casual from 'casual';
import { knex, features } from 'qails';
import { isDate } from 'util';
import { model as Catalog } from '../../src/models/catalog';
import { model as Product } from '../../src/models/product';

const { MODEL_CASCADEDELETE } = features;
const productId = casual.uuid;
const catalogId = casual.uuid;
console.log(productId);
console.log(catalogId);

before(async () => {
  // 构建测试数据
  await new Catalog().save({ id: catalogId, name: casual.title });
  await new Product().save({
    id: productId,
    name: casual.title,
    catalogId,
    content: casual.text
  });
  await Catalog.where({ id: catalogId }).destroy();
});

describe('# bookshelf-cascade-delete', () => {
  if (MODEL_CASCADEDELETE) {
    describe('# 被删数据', () => {
      it('fetch时不存在被删数据', async () => {
        const catalog = await Catalog.forge({ id: catalogId }).fetch();
        assert.ok(!catalog);
      });
      it('数据库中不存在被删数据', async () => {
        const catalogData = await knex('catalogs').select('*').where('id', catalogId);
        assert.equal(0, catalogData.length);
      });
    });
    describe('# 关联数据', () => {
      it('fetch时不存在关联数据', async () => {
        const product = await Product.forge({ id: productId }).fetch();
        assert.ok(!product);
      });
      it('数据库中存在关联数据', async () => {
        const productData = await knex('products').select('*').where('id', productId);
        assert.equal(1, productData.length);
        assert.ok(isDate(productData[0].deletedAt));
      });
    });
  } else {
    it.skip('配置文件中未启用改功能，跳过测试');
  }
});
