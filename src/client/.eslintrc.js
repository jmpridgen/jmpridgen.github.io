module.exports = {
  "extends": [
    "../../.eslintrc.js",
  ],
  "parser": "babel-eslint",
  "plugins": [
    "react"
  ],
  "rules": {
    "react/prop-types": 0,
    "no-return-assign": ["error", "except-parens"],
    "jsx-a11y/href-no-hash": "off",
    "jsx-a11y/anchor-is-valid": ["warn", { "aspects": ["invalidHref"] }],
    "no-underscore-dangle": [1, { "enforceInMethodNames": true }],
    "react/jsx-curly-brace-presence": [1, { "props": "never", "children": "ignore" }],
    "import/no-extraneous-dependencies": ["error", { "devDependencies": true, "optionalDependencies": false, "peerDependencies": false }],
    "prefer-destructuring": 0
  },
  "env": {
    "browser": true,
  },
  "settings": { "import/resolver": "webpack" }
};
