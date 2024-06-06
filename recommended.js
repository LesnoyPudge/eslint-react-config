import tseslint from 'typescript-eslint';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import controlStatementsPlugin from 'eslint-plugin-jsx-control-statements';
import { fixupPluginRules } from '@eslint/compat';
import reactPlugin from 'eslint-plugin-react';
// import reactCompilerPlugin from 'eslint-plugin-react-compiler';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import reactRefreshPlugin from 'eslint-plugin-react-refresh';



export const recommended = tseslint.config(
    ...tseslint.config({
        plugins: { 'jsx-a11y': fixupPluginRules(jsxA11yPlugin) },
        rules: jsxA11yPlugin.configs.recommended.rules,
    }),

    ...tseslint.config({
        plugins: { 'react': fixupPluginRules(reactPlugin) },
        rules: reactPlugin.configs['jsx-runtime'].rules,
    }),
    // ...tseslint.config({
    //     plugins: { 'react-compiler': reactCompilerPlugin },
    //     rules: { 'react-compiler/react-compiler': 'error' },
    // }),

    ...tseslint.config({
        plugins: { 'react-hooks': fixupPluginRules(reactHooksPlugin) },
        rules: {
            ...reactHooksPlugin.configs.recommended.rules,
            'react/jsx-newline': ['warn', {
                prevent: false,
            }],
        },
    }),

    ...tseslint.config({
        plugins: { 'react-refresh': fixupPluginRules(reactRefreshPlugin) },
        rules: {
            'react-refresh/only-export-components': [
                'warn',
                { 'allowConstantExport': true },
            ],
        },
    }),

    ...tseslint.config({
        plugins: {
            'jsx-control-statements': fixupPluginRules(
                controlStatementsPlugin,
            ),
        },
        languageOptions: {
            globals: (
                controlStatementsPlugin
                    .environments['jsx-control-statements'].globals
            ),
        },
        rules: {
            ...controlStatementsPlugin.configs.recommended.rules,
            'jsx-control-statements/jsx-jcs-no-undef': 'off',
        },
    }),
);