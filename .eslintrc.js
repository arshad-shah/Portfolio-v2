// eslint-disable-next-line no-undef
module.exports = {
	settings: {
		react: {
			version: 'detect',
		},
	},
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['eslint:recommended', 'plugin:react/recommended'],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react'],
	rules: {
		quotes: ['error', 'single'],
		'spaced-comment': ['error', 'always'],

		// semi colons
		semi: ['error', 'always'],
		'semi-spacing': 'error',
		'no-extra-semi': 'error',
		'no-unexpected-multiline': 'error',

		// line length
		'max-len': ['error', { code: 100 }],

		// comma style
		'comma-style': ['error', 'last'],

		// comma after last value
		'comma-dangle': ['error', 'always-multiline'],

		// indentation using 2 tabs instead of spaces
		indent: ['error', 'tab', { SwitchCase: 1 }],
		'space-infix-ops': 'error',

		// space before blocks
		'space-before-blocks': ['error', 'always'],

		// keyword spacing
		'keyword-spacing': [
			'error',
			{
				before: true,
				after: true,
			},
		],
	},
};
