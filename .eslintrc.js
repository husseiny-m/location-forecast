module.exports = {
  plugins: ['node', 'jest'],
  env: {
    node: true,
    es6: true,
    jest: true
  },
  globals: {
    inject: true
  },
  extends: ['eslint:recommended', 'google', 'plugin:node/recommended'],
  parserOptions: { ecmaVersion: 2018 },
  rules: {
    'max-len': 0,
    'linebreak-style': 0,
    'space-before-function-paren': 0,
    'eol-last': 0,
    'no-var': 0,
    'comma-dangle': 0,
    'require-jsdoc': 0,
    'spaced-comment': 0,
    'node/no-unpublished-require': 0,
    'no-console': 0,
    quotes: ['error', 'single'],
    semi: ['error', 'always']
  }
};
