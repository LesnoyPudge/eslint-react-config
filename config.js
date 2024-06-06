// @ts-check
import tseslint from 'typescript-eslint';
import { recommended } from './recommended.js';



export const eslintConfigReact = tseslint.config(
    tseslint.configs.base,

    ...recommended,

    {
        files: ['**/*.tsx', '**/*.jsx'],
        languageOptions: {
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
    },
);