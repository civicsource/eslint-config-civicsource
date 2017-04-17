module.exports = {
	plugins: [
		"filenames",
		"prettier"
	],
	rules: {
		// ERRORS

		// No more bikeshedding on style; just use prettier
		// https://github.com/not-an-aardvark/eslint-plugin-prettier
		"prettier/prettier": ["error", { useTabs: true }],

		// enforce lowercase kebab case for filenames
		// we have had issues in the past with case sensitivity & module resolution
		// https://github.com/selaux/eslint-plugin-filenames
		"filenames/match-regex": ["error", "^[a-z\-\.]+$"],

		// don't concatenate strings like a n00b
		// http://eslint.org/docs/rules/prefer-template
		"prefer-template": ["error"],

		// put a space after the comment slashes
		// http://eslint.org/docs/rules/spaced-comment
		"spaced-comment": ["error", "always"],

		// =======================================================================================
		// WARNINGS

		// don't write a whole application in one single js file (default 301 lines is too big)
		// http://eslint.org/docs/rules/max-lines
		"max-lines": ["warn"],

		// don't make ridiculous functions that take billions upon billions of arguments
		// http://eslint.org/docs/rules/max-params
		"max-params": ["warn", { max: 4 }]
	}
};