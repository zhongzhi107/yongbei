module.exports = {
  // 让 Model 具有删除关联数据功能
  MODEL_CASCADEDELETE: true,
  // 让 Model 具有自动生成UUID的功能
  MODEL_UUID: true,
  // 让 Model 具有软删除记录的能力
  MODEL_SOFTDELETE: {
    field: 'deletedAt'
  }
};
