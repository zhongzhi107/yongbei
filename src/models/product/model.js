import { Model } from 'qails';
import { model as Catalog } from '../catalog';
import { model as Country } from '../country';
import { model as AgeGroup } from '../ageGroup';

/**
 * @class Product
 */
export default class Product extends Model {
  /**
   * @method 表名称
   * @return {string}
   */
  get tableName() {
    return 'products';
  }

  /**
   * 是否包含 created_at 和 updated_at
   * 默认包含
   * @member
   * @return {boolean|array}
   */
  get hasTimestamps() {
    return ['createdAt', 'updatedAt', 'deletedAt'];
  }

  /**
   * One-to-one
   * @method
   * @return {bookshelf.Collection}
   */
  catalog() {
    return this.belongsTo(Catalog, 'catalogId');
  }

  /**
   * One-to-one
   * @method
   * @return {bookshelf.Collection}
   */
  country() {
    return this.belongsTo(Country, 'countryId');
  }

  /**
   * One-to-one
   * @method
   * @return {bookshelf.Collection}
   */
  ageGroup() {
    return this.belongsTo(AgeGroup, 'ageGroupId');
  }
}
