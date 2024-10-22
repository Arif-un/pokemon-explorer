import { fixupPluginRules } from '@eslint/compat'
import { default as eslint } from '@eslint/js'
import stylisticTs from '@stylistic/eslint-plugin-ts'
import _import from 'eslint-plugin-import'
import jsxA11Y from 'eslint-plugin-jsx-a11y'
import prettier from 'eslint-plugin-prettier'
import promise from 'eslint-plugin-promise'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import unusedImports from 'eslint-plugin-unused-imports'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,

  {
    ignores: [
      '**/vite.config.ts',
      '**/commitlint.config.js',
      '**/node_modules',
      '**/build',
      '**/build/**',
      '**/dist/**',
      'dist/**',
      '**/coverage'
    ],
    languageOptions: {
      ecmaVersion: 2021,
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: globals.browser
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      jsxA11Y,
      import: fixupPluginRules(_import),
      prettier,
      promise,
      stylisticTs,
      'react-refresh': reactRefresh,
      'unused-imports': unusedImports
    },
    settings: {
      react: { version: 'detect' },
      'import/resolver': { typescript: true }
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      indent: 'off',
      allowImplicit: 0,
      semi: ['error', 'never'],
      camelcase: ['error', { properties: 'never' }],
      'unused-imports/no-unused-imports': 'error',
      'react/require-default-props': [0, { functions: 'ignore' }],

      'react/no-unescaped-entities': [
        'error',
        {
          forbid: [
            { char: '>', alternatives: ['&gt;'] },
            { char: '<', alternatives: ['&lt;'] }
          ]
        }
      ],

      'template-curly-spacing': 'off',
      'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
      'react/destructuring-assignment': 'off',
      'arrow-parens': 'off',
      'react/prop-types': 'off',
      'max-len': ['error', { code: 250 }],
      'linebreak-style': ['error', 'unix'],
      'react-hooks/exhaustive-deps': 'warn',
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',

      'object-curly-newline': [
        'error',
        {
          ImportDeclaration: { consistent: true },
          ExportDeclaration: { consistent: true },
          ObjectPattern: { consistent: true },
          ObjectExpression: { consistent: true }
        }
      ],

      'array-callback-return': 'off',
      'consistent-return': 'off',

      'newline-per-chained-call': ['error', { ignoreChainWithDepth: 4 }],
      'import/extensions': 'off',
      'import/no-extraneous-dependencies': 'error',
      'import/no-duplicates': 'error',
      'import/no-self-import': 'error',
      'import/no-relative-packages': 'error',
      // "import/no-relative-parent-imports": "error",
      'import/consistent-type-specifier-style': ['error', 'prefer-inline'],
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-non-null-assertion': 'off',
      'import/no-empty-named-blocks': 'error',
      'import/no-import-module-exports': 'error',
      'import/newline-after-import': 'error',
      'import/no-useless-path-segments': ['error', { noUselessIndex: true }],
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true
        }
      ],
      '@typescript-eslint/indent': 'off',
      '@typescript-eslint/semi': 'off',
      'prettier/prettier': ['warn', {}],

      '@typescript-eslint/no-use-before-define': ['error', { functions: false, classes: false }],

      'react/no-unknown-property': ['error', { ignore: ['css'] }],

      'no-param-reassign': [
        'error',
        { props: true, ignorePropertyModificationsForRegex: ['^draft', '^prev', '^prv', 'acc'] }
      ]
    }
  }
)
