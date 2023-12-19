module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base', 'plugin:react/recommended'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'custom-rules',
    'react',
  ],
  rules: {
    'custom-rules/no-region-specific-keyword': 'warn',
    'custom-rules/no-currency-hardcoding': 'warn',
    'custom-rules/no-href-hardcoding': 'warn',
  },
};
