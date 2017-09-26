import { fetchModels, fetchModel, updateModel, deleteModel } from 'qails';
import Catalog from './model';

export default {
  Query: {
    catalogs: fetchModels(Catalog),
    catalog: fetchModel(Catalog)
  },
  Mutation: {
    updateCatalog: updateModel(Catalog),
    deleteCatalog: deleteModel(Catalog)
  }
};
