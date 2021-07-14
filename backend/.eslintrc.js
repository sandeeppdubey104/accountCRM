module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'no-console': ['error', { allow: ['warn', 'error'] }],
    camelcase: 0,
    'max-len': ['error', { code: 200 }],
    'no-unused-vars': 'off',
    'import/extensions': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': 'error',
    semi: ['error', 'never'],
    quotes: [2, 'single'],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'import/no-unresolved': [
      'error',
      {
        ignore: ['src', './'],
      },
    ],
    'object-property-newline': ['error', { allowAllPropertiesOnSameLine: false }],
    indent: 'off',
    '@typescript-eslint/indent': ['error', 2],
    'no-throw-literal': 'off',
    'brace-style': ['error', 'stroustrup'],
  },
}
