module.exports = {
  extends: [
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:@typescript-eslint/strict',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['prettier', '@typescript-eslint', 'import', 'unused-imports'],
  parserOptions: {
    ecmaVersion: 2018,
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['node_modules/', '.eslintrc.js', 'dist/'],
  rules: {
    'prettier/prettier': ['error'],
    'eol-last': ['error', 'always'],
    'import/no-cycle': 0,
    'import/prefer-default-export': 0,
    'import/no-unresolved': 0,
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always',
        groups: ['builtin', 'external', 'internal', 'sibling', 'index', 'parent'],
      },
    ],
    'unused-imports/no-unused-vars': [
      'error',
      { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
    ],
    'unused-imports/no-unused-imports': 'error',
    'object-curly-spacing': ['error', 'always'],
    'consistent-return': 0,
    'max-len': 0,
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: true,
        },
      },
    ],
    'no-param-reassign': [2, { props: true }],
    'no-multiple-empty-lines': [2, { max: 1, maxEOF: 0, maxBOF: 0 }],
    'no-duplicate-imports': ['error'],
    semi: ['error', 'always'],
    quotes: ['error', 'single', { avoidEscape: true }],
    '@typescript-eslint/explicit-function-return-type': ['error', { allowExpressions: true }],
    '@typescript-eslint/array-type': ['error', { readonly: 'array', default: 'array' }],
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/explicit-member-accessibility': 'error',
    '@typescript-eslint/member-ordering': 'error',
    '@typescript-eslint/prefer-readonly': 'error',
    '@typescript-eslint/no-extraneous-class': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unnecessary-condition': 'off', // TODO remove that
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: {
          arguments: false,
          attributes: false,
        },
      },
    ],
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          Symbol: false,
        },
        extendDefaults: true,
      },
    ],

    '@typescript-eslint/unbound-method': 'off',
  },
  settings: {
    'import/resolver': {},
  },
};
