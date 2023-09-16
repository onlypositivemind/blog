// eslint-disable-next-line no-undef
module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    globals: {
        NodeJS: true,
        __IS_DEV__: true,
        __API__: true,
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'react-hooks',
        'import',
        'simple-import-sort',
        'i18next',
    ],
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'plugin:i18next/recommended',
    ],
    settings: {
        react: {
            version: 'detect',
        },
        'import/resolver': {
            typescript: {
                alwaysTryTypes: true,
            },
        },
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/extensions': ['.ts, .tsx'],
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        semi: ['error', 'always'],
        indent: ['error', 4],
        'max-len': [
            'error',
            {
                code: 120,
                ignoreComments: true,
            },
        ],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/display-name': 'off',
        'import/no-named-as-default': 'off',
        'no-debugger': 'warn',
        'no-console': 'error',
        'react/react-in-jsx-scope': 'off',
        quotes: ['error', 'single'],
        'jsx-quotes': ['error', 'prefer-single'],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        '@typescript-eslint/no-non-null-assertion': 'off',
        'simple-import-sort/imports': [
            'error',
            {
                groups: [
                    [
                        // Packages. `react` related packages come first.
                        // Absolute imports (path from 'path')
                        '^@?\\w',
                        '^react',
                        // Internal packages.
                        '(app|pages|widgets|features|entities)(/.*|$)',
                        // Without assets.
                        '^@/shared(?!\\/assets)',
                        // Side effect imports.
                        '^\\u0000',
                        // Parent imports. Put `..` last.
                        '^\\.\\.(?!/?$)',
                        '^\\.\\./?$',
                        '^\\.(?!/?$)',
                        // Assets
                        '^@/shared\\/assets',
                        // Styles.
                        '^.+\\.s?css$',
                    ],
                ],
            },
        ],
        'import/first': 'warn',
        'import/newline-after-import': 'warn',
        'import/no-duplicates': 'warn',
        'import/no-unresolved': 'off',
        'i18next/no-literal-string': [
            'error',
            {
                markupOnly: true,
                ignoreAttribute: [
                    'iconStyle',
                    'theme',
                    'size',
                    'data-testid',
                    'target',
                    'to',
                    'name',
                    'alt',
                    'justify',
                    'align',
                    'direction',
                    'gap',
                    'role',
                    'as',
                    'border',
                    'Heading',
                    'title',
                    'dataTestid',
                ],
                words: { include: [], exclude: ['Blog'] },
            },
        ],
    },
    overrides: [
        {
            files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 'off',
                'max-len': 'off',
                'react/jsx-props-no-spreading': 'off',
            },
        },
    ],
};
