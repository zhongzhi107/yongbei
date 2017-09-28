/**
 * 创建楼层路由
 */

import { Resource } from 'qails';
import { model as Country } from '../models/country';

export default Resource.define(Country.collection());
