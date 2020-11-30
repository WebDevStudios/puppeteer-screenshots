module.exports = {
  parserOptions: {
    ecmaVersion: 2021
  },
  env: {
    node: true
  },
  extends: ['eslint:recommended', 'prettier'],

  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error'
  }
}
