import { Model } from 'qails';
import { model as Product } from '../product';

/**
 * @class Catalog
 */
export default class Catalog extends Model {
  /**
   * 依赖模型方法，在本模型底部有定义
   * 删除时依据此项删除关联表中对应的数据
   * @static {array}
   */
  static dependents = ['product']; // eslint-disable-line

  /**
   * @method 表名称
   * @return {string}
   */
  get tableName() {
    return 'catalogs';
  }

  /**
   * 是否包含 created_at 和 updated_at
   * 默认包含
   * @member
   * @return {boolean|array}
   */
  get hasTimestamps() {
    return ['createdAt', 'updatedAt'];
  }

  /**
   * One-to-many
   * @method
   * @return {bookshelf.Collection}
   */
  products() {
    return this.hasMany(Product, 'catalogId');
  }
}
