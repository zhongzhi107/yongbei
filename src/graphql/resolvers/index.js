import { mergeResolvers } from 'merge-graphql-schemas';
import { resolver as catalog } from '../../models/catalog';
import { resolver as product } from '../../models/product';
import { resolver as ageGroup } from '../../models/ageGroup';
import { resolver as country } from '../../models/country';

export default mergeResolvers([
  catalog,
  product,
  ageGroup,
  country
]);
