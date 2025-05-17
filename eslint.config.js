import js from '@eslint/js'
import prettierConfig from 'eslint-config-prettier'
import vuePlugin from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'
import tseslint from 'typescript-eslint'
import vitest from 'eslint-plugin-vitest'

export default [
  js.configs.recommended,
  ...vuePlugin.configs['flat/recommended'],
  prettierConfig,
  {
    files: ['app/javascript/**/*.{js,ts,vue}'],
    plugins: {
      '@typescript-eslint': tseslint.plugin,
    },
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tseslint.parser,
        extraFileExtensions: ['.vue'],
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
      },
    },
    rules: {
      'vue/require-default-prop': 'off',
      'vue/multi-word-component-names': 'warn',
      'vue/no-unused-vars': 'warn',
      'vue/no-unused-components': 'warn',
      'vue/attribute-hyphenation': 'warn',
      'vue/v-on-event-hyphenation': 'warn',
      'vue/attributes-order': 'warn',
      'vue/require-explicit-emits': 'warn',
      'vue/order-in-components': 'warn',
      'vue/require-prop-types': 'warn',
      'vue/no-v-html': 'warn',
      'no-undef': 'error',
      'no-unused-vars': 'warn',
      'vue/return-in-computed-property': 'warn',
      'vue/require-valid-default-prop': 'warn',
      'vue/no-deprecated-slot-attribute': 'warn',
      'vue/require-v-for-key': 'warn',
      'no-empty': 'warn',
      'no-useless-escape': 'warn',
      'vue/no-reserved-component-names': 'warn',
      'vue/v-slot-style': 'warn',
      'vue/no-mutating-props': 'warn',
      'no-unreachable': 'warn',
      'no-dupe-keys': 'error',
      'vue/no-dupe-keys': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
    },
  },
  {
    files: ['app/javascript/**/*.test.{js,ts}', 'app/javascript/**/*.spec.{js,ts}'],
    plugins: {
      vitest,
    },
    languageOptions: {
      globals: vitest.environments.globals,
    },
    rules: {
      ...vitest.configs.recommended.rules,
    },
  },
]
