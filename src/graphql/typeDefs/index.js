import { mergeTypes } from 'merge-graphql-schemas';
import { schema as catalog } from '../../models/catalog';
import { schema as product } from '../../models/product';
import { schema as ageGroup } from '../../models/ageGroup';
import { schema as country } from '../../models/country';

export default mergeTypes([
  catalog,
  product,
  ageGroup,
  country
]);
