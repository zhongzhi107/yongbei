module.exports = {
  extends: ['eslint-config-qunar/base'].map(require.resolve),
  env: {
    mocha: true
  }
};
