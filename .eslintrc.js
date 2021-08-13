module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'max-len': ['error', { code: 140 }],
    'no-param-reassign': 'off',
    'no-multi-assign': 'off',
    'no-useless-escape': 'off',
    'no-restricted-globals': 'off',
    'import/prefer-default-export': 'off',
  },
};
