import { fetchModels, fetchModel } from 'qails';
import Product from './model';

export default {
  Query: {
    products: fetchModels(Product),
    product: fetchModel(Product)
  }
};
