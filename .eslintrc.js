module.exports = {
  env: {
    node: true,
    commonjs: true,
    es2020: true,
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 11,
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 0,
  },
  overrides: [
    {
      files: ['__tests__/*', '__tests__/**/*'],
      env: {
        jest: true,
      },
    },
  ],
};
