module.exports = {
	extends: [
		"plugin:react/recommended"
	],
	plugins: [
		"react",
		"jsx-a11y"
	],
	rules: {
		// we don't use propTypes, we use flow (at least theoretically)
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
		"react/prop-types": ["off"],

		// ERRORS

		// use double quotes like a gentleman (or a lady)
		// http://eslint.org/docs/rules/jsx-quotes
		"jsx-quotes": ["error", "prefer-double"],

		// don't write components like a n00b
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
		"react/prefer-stateless-function": ["error"],

		// don't write components like a n00b
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md
		"react/prefer-es6-class": ["error", "always"],

		// wrap multiline jsx in parens
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md
		"react/jsx-wrap-multilines": ["error"],

		// put stuff in order
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
		"react/sort-comp": ["error"],

		// make missing collection key compile error rather than runtime error
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
		"react/jsx-key": ["error"],

		// don't use bools like a n00b
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
		"react/jsx-boolean-value": ["error", "never"],

		// indent components like sane human
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
		"react/jsx-indent": ["error", "tab"],

		// indent props like a sane human
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
		"react/jsx-indent-props": ["error", "tab"],

		// don't be weird about spaces for jsx props
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md
		"react/jsx-curly-spacing": ["error", "never"],

		// don't be weird about spacing around equal signs in jsx props
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md
		"react/jsx-equals-spacing": ["error", "never"],

		// put a space at the end of your component - THINK OF THE CHILDREN
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-space-before-closing.md
		"react/jsx-space-before-closing": ["error"],

		// don't waste half a day debugging because you decided to use an array index to key a list
		// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
		"react/no-array-index-key": ["error"],

		// don't write invalid aria props
		// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-props.md
		"jsx-a11y/aria-props": ["error"],

		// don't write invalid aria proptypes
		// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-proptypes.md
		"jsx-a11y/aria-proptypes": ["error"],

		// don't write invalid aria roles
		// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-role.md
		"jsx-a11y/aria-role": ["error"],

		// don't put aria on shit that don't want it
		// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-unsupported-elements.md
		"jsx-a11y/aria-unsupported-elements": ["error"],

		// you best be putting aria props on 'dem aria roles
		// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/role-has-required-aria-props.md
		"jsx-a11y/role-has-required-aria-props": ["error"],

		// don't put invalid aria props on aria roles
		// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/role-supports-aria-props.md
		"jsx-a11y/role-supports-aria-props": ["error"],

		// =======================================================================================
		// WARNINGS

		// make sure those keyboard people are happy
		// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/mouse-events-have-key-events.md
		"jsx-a11y/mouse-events-have-key-events": ["warn"],

		// make sure those keyboard people are happy
		// https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/click-events-have-key-events.md
		"jsx-a11y/click-events-have-key-events": ["warn"]
	}
};