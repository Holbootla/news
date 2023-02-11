module.exports = {
    env: {
        browser: true,
        node: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'airbnb',
        'plugin:i18next/recommended',
    ],
    overrides: [
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'i18next',
    ],
    rules: {
        'max-len': ['error', 150],
        indent: ['error', 4],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'react/jsx-filename-extension': [
            'error',
            { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
        ],
        'react/function-component-definition': ['error', { namedComponents: 'arrow-function' }],
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
        'react/jsx-props-no-spreading': 'warn',
        'no-unused-vars': 'warn',
        'import/extensions': 'off',
        'import/no-unresolved': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/require-default-props': 'off',
        'import/prefer-default-export': 'off',
        'no-underscore-dangle': 'off',
    },
    globals: {
        __IS_DEV__: true,
    },
};
