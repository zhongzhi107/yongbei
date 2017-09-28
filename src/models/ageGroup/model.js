import { Model } from 'qails';
import { model as Product } from '../product';

/**
 * @class AgeGroup
 */
export default class AgeGroup extends Model {
  /**
   * @method 表名称
   * @return {string}
   */
  get tableName() {
    return 'ageGroups';
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
    return this.hasMany(Product, 'ageGroupId');
  }
}
