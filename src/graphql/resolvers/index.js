import { mergeResolvers } from 'merge-graphql-schemas';
import { resolver as catalog } from '../../models/catalog';
import { resolver as product } from '../../models/product';

export default mergeResolvers([
  catalog,
  product
]);
