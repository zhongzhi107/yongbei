import { mergeTypes } from 'merge-graphql-schemas';
import { schema as catalog } from '../../models/catalog';
import { schema as product } from '../../models/product';

export default mergeTypes([
  catalog,
  product
]);
