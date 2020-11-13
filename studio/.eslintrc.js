const path = require('path')

module.exports = {
  extends: ['standard', 'standard-react'],
  parser: 'babel-eslint',
  rules: {
    'react/prop-types': 0,
		'no-tabs': ['error', { allowIndentationTabs: true }],
		'indent': ['error', 'tab'],
		'comma-dangle': ['error', 'always-multiline'],
		'semi': ['error', 'always'],
		'object-curly-spacing': ['error', 'always'],
		'space-before-function-paren': ['error', 'never']
  },
  settings: {
    react: {
      pragma: 'React',
      version: '16.8.6'
    }
  }
}
