const eslintJS = require('@eslint/js')
const globals = require('globals')

module.exports = [
  eslintJS.configs.recommended,
  {
    languageOptions: {
      globals: globals.node,
    },
    ignores: [
      "coverage",
    ],
  },
]
