module.exports = {
	'env': {
		'browser': true,
		'es6': true,
		'node': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:import/errors'
	],
	'globals': {
		'Atomics': 'readonly',
		'SharedArrayBuffer': 'readonly'
	},
	'settings': { 'react': { 'version': 'detect' } },
	'parser': 'babel-eslint',
	'parserOptions': {
		'ecmaFeatures': { 'jsx': true },
		'ecmaVersion': 2020,
		'sourceType': 'module'
	},
	'plugins': [
		'react',
		'simple-import-sort',
		'import'
	],
	'rules': {
		'react/prop-types': [ 'warn' ],
		'indent': [ 'error', 'tab', { SwitchCase: 1 } ],
		'quotes': [ 'error', 'single' ],
		'semi': [ 'error', 'always', { 'omitLastInOneLineBlock': true } ],
		'object-curly-spacing': [ 'error', 'always' ],
		'array-bracket-spacing': [ 'error', 'always' ],
		'arrow-parens': [ 'error', 'as-needed', { 'requireForBlockBody': true } ],
		'arrow-spacing': [ 'error', { 'before': true, 'after': true } ],
		'comma-spacing': [ 'error', { 'before': false, 'after': true } ],
		'block-spacing': [ 'error', 'always' ],
		'brace-style': [ 'warn', '1tbs', { 'allowSingleLine': false } ],
		'comma-dangle': [ 'error', 'never' ],
		'jsx-quotes': [ 'error', 'prefer-double' ],
		'multiline-ternary': [ 'warn', 'always-multiline' ],
		'key-spacing': [ 'error', { afterColon: true } ],
		'no-multi-spaces': [ 'error', { ignoreEOLComments: true } ],
		'object-curly-newline': [ 'warn', {
			'ObjectExpression': { 'multiline': true, 'minProperties': 3 },
			'ObjectPattern': { 'multiline': true },
			'ImportDeclaration': { 'multiline': true, 'minProperties': 4 },
			'ExportDeclaration': { 'multiline': true, 'minProperties': 3 }
		} ],
		'template-curly-spacing': [ 'error', 'never' ],
		'keyword-spacing': [ 'warn', {
			'before': false,
			'after': true,
			'overrides': {
				'from': { 'before': true },
				'as': { 'before': true },
				'else': { 'before': true },
				'catch': { 'before': true }
			}
		}
		],
		'react/prefer-stateless-function': 'error',
		'simple-import-sort/imports': 'error',
		'simple-import-sort/exports': 'error',
		'no-extra-bind': 'error',
		'no-floating-decimal': 'error',
		'no-var': 'error',
		'no-unused-vars': 'warn',
		'no-console': 'warn',
		'prefer-arrow-callback': 'warn',
		'prefer-const': 'warn',
		'prefer-destructuring': 'warn',
		'prefer-object-spread': 'warn',
		'prefer-template': 'warn',
		'import/no-unresolved': 'warn'
	}
};