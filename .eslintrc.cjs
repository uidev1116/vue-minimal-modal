module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    'plugin:vue/vue3-recommended',
    'plugin:vuejs-accessibility/recommended',
    'prettier',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['examples/src/**'],
        peerDependencies: true,
      },
    ],
    'import/extensions': [
      'error',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'vue/multi-word-component-names': 'off',
    'vue/require-default-prop': 'off',
    'consistent-return': 'off',
    /* 型定義にno-unused-varsのルールが適用される問題への対策*/
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
  },
  overrides: [
    {
      files: ['src/composables/**/*.ts', 'src/components/index.ts'],
      rules: {
        'import/prefer-default-export': 'off',
      },
    },
  ],
  settings: {
    'import/resolver': {
      typescript: {},
    },
    'import/internal-regex': /^@types\//,
  },
}
