module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: ['eslint:recommended'],
  plugins: ['@glimmerx'],
  rules: {
    '@glimmerx/template-vars': 'error',
  },
  overrides: [
    {
      files: [
        'webpack.config.js'
      ],
      parserOptions: {
        sourceType: 'script',
      },
      env: {
        browser: false,
        node: true,
      },
      plugins: ['node']
    }
  ]
}
