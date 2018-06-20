module.exports = {
  "extends": [
    "../../.eslintrc.js",
  ],
  "rules": {
    "no-return-assign": ["error", "except-parens"],
    "no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
    "no-underscore-dangle": [1, { "enforceInMethodNames": true }],
  },
  "env": {
      "node": true,
  },
};
