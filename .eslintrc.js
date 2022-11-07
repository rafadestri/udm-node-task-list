module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb-base", "prettier"],
  plugins: ["prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "prettier/prettier": "error",
    "class-methods-use-this": "off",
    quotes: ["error", "double"],
    "no-param-reassign": "off",
    camelcase: "off",
    "no-underscore_dangle": "off",
    "no-unused-vars": ["error", { argsIgnorePattern: "next" }],
  },
};
