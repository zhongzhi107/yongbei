/**
 * 创建楼层路由
 */

import { Resource } from 'qails';
import { model as Product } from '../models/product';

export default Resource.define(Product.collection());
