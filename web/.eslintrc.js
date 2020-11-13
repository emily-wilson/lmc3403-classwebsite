module.exports = {
  extends: ['standard', 'standard-react', 'plugin:import/errors', 'plugin:import/warnings'],
  rules: {
    'object-curly-spacing': ['error', 'never'],
		'no-tabs': ['error', { allowIndentationTabs: true }],
		'indent': ['error', 'tab'],
		'comma-dangle': ['error', 'always-multiline'],
		'semi': ['error', 'always'],
		'object-curly-spacing': ['error', 'always'],
		'space-before-function-paren': ['error', 'never'],
		'react/jsx-indent': [true, 'tab']
  },
  settings: {
    react: {
      pragma: 'React',
      version: '16.8.4'
    }
  },
  parser: 'babel-eslint'
}
