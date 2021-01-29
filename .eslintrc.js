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
<<<<<<< HEAD
  rules: {'prettier/prettier': 0},
=======
  rules: {
    'prettier/prettier': 0,
  },
>>>>>>> 282a8d7b600ad15d1fe735cc38ec13a45028e1fc
  overrides: [
    {
      files: ['__tests__/*', '__tests__/**/*'],
      env: {
        jest: true,
      },
    },
  ],
};
