import assert from 'assert';
import casual from 'casual';
import { features } from 'qails';
import { model as Catalog } from '../../src/models/catalog';

const { MODEL_UUID } = features;
const name = casual.uuid;

describe('# bookshelf-uuid', () => {
  if (MODEL_UUID) {
    before(async () => {
      // 构建测试数据
      await new Catalog().save({ name });
    });

    after(async () => {
      await Catalog.where({ name }).destroy();
    });

    it('自动生成uuid', async () => {
      const catalog = await Catalog.forge({ name }).fetch();
      assert.ok(catalog);
      assert.equal(36, catalog.id.length);
    });
  } else {
    it.skip('配置文件中未启用改功能，跳过测试');
  }
});
