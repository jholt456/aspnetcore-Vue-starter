const typescriptEslintRecommended = require("@typescript-eslint/eslint-plugin/lib/configs/recommended.json");
const jsEslintRecommended = require("@typescript-eslint/eslint-plugin/lib/configs/recommended.json");

module.exports = {
  root: true,
  parserOptions: {
    parser: "babel-eslint", //@typescript-eslint/parser
    ecmaFeatures: {
      legacyDecorators: true
    }
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: ["plugin:@typescript-eslint/recommended", "plugin:vue/recommended"],
  plugins: ["vue"],
  // add your custom rules here
  rules: {
    // allow paren-less arrow functions
    "arrow-parens": 0,
    // allow async-await
    "generator-star-spacing": 0,
    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0, // note you must disable the base rule as it can report incorrect errors
    indent: "off",
    "@typescript-eslint/indent": ["error", 2]
  },
  overrides: [
    {
      files: ["**/*.js"],
      plugins: ['prettier'],
      parserOptions: {
        parser: "babel-eslint" //@typescript-eslint/parser
      },
      //workaround for this:https://github.com/eslint/eslint/issues/8813
      rules: Object.assign(
        {},
        {
          // allow paren-less arrow functions
          "arrow-parens": 0,
          // allow async-await
          "generator-star-spacing": 0,
          // allow debugger during development
          "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0
        }
      )
    }
  ]
};
