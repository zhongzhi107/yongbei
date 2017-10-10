import { fetchModels, fetchModel } from 'qails';
import Product from './model';

export default {
  Query: {
    products: fetchModels(Product),
    product: fetchModel(Product)
  } // ,
  // Catalog: {
  //   // 这种方法虽然可以工作，但执行的sql太多，不推荐使用
  //   products(root, args) {
  //     // console.log('----root: ', root.id);
  //     // console.log('----args: ', args);
  //     // console.log('----context: ', context);
  //     const catalogId = root.id;
  //     return new Promise((resolve, reject) => {
  //       Product.where({ catalogId }).fetchPage(args).then((items) => {
  //         resolve(items.toJSON());
  //       }).catch(err => reject(err));
  //     });
  //   }
  // }
};
