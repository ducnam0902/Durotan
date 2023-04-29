module.exports = {
  env: { browser: true, es2020: true, node: true },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react-hooks/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react-refresh', 'prettier'],
  rules: {
    'react-refresh/only-export-components': 'error',
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'avoid',
        semi: true,
        trailingComma: 'all',
        endOfLine: 'auto',
        tabWidth: 2,
        useTabs: false,
        singleQuote: true,
        printWidth: 120,
        jsxSingleQuote: false,
      },
    ],
  },
};
