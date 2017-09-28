/**
 * 创建楼层路由
 */

import { Resource } from 'qails';
import { model as Catalog } from '../models/catalog';

export default Resource.define(Catalog.collection());
