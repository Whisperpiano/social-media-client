import globals from 'globals'
import pluginJs from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import pluginJest from 'eslint-plugin-jest'
import pluginCypress from "eslint-plugin-cypress";

export default [
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  {
    files: ['**/*.test.js'],
    languageOptions: {
      globals: { ...globals.jest }, 
    },
    plugins: {
      jest: pluginJest,
    },
    rules: {
      ...pluginJest.configs.recommended.rules,
    },
  },
  {
    files: ["**/*.cy.js"],
    languageOptions: {
        globals: {
            ...globals.cypress,
        },
    },
    plugins: {
        cypress: pluginCypress,
    },
    rules: {
        ...pluginCypress.configs.recommended.rules,
        "cypress/no-unnecessary-waiting": "off",
        "no-unused-vars": "off",
        "no-undef": "off",
    },
},
{
    files: ["cypress.config.js", "**/*.js"],
    rules: {
        "no-unused-vars": "off",
        "no-undef": "off",
    },
},
  eslintConfigPrettier,
]
