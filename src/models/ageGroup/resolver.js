import { fetchModels, fetchModel, updateModel, deleteModel } from 'qails';
import AgeGroup from './model';

export default {
  Query: {
    ageGroups: fetchModels(AgeGroup),
    ageGroup: fetchModel(AgeGroup)
  },
  Mutation: {
    updateAgeGroup: updateModel(AgeGroup),
    deleteAgeGroup: deleteModel(AgeGroup)
  }
};
