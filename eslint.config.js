import eslintJS from '@eslint/js'
import globals from 'globals'

export default [
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
