module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'eslint-config-prettier',

    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    // 'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended'
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    '@typescript-eslint/dot-notation': 'error',
    'react/react-in-jsx-scope': 'off'
  },
  settings: {
    react: {
      version: '18.2'
    }
  }
}
