import { fetchModels, fetchModel, updateModel, deleteModel } from 'qails';
import Country from './model';

export default {
  Query: {
    countries: fetchModels(Country),
    country: fetchModel(Country)
  },
  Mutation: {
    updateCountry: updateModel(Country),
    deleteCountry: deleteModel(Country)
  }
};
