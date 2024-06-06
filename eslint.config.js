// @ts-check

import tseslint from 'typescript-eslint';
import { react } from './rules/react.js';
import { reactCompiler } from './rules/reactCompiler.js';
import { reactHooks } from './rules/reactHooks.js';
import { reactRefresh } from './rules/reactRefresh.js';
import { reactJsxControlStatements } from './rules/jsxControlStatements.js';
import { jsxA11y } from './rules/jsxA11y.js';
import { recommended } from './recommended.js';
import { eslintConfigReact } from './config.js';
import eslintConfigBase from '@lesnoypudge/eslint-base-config';
import 'eslint-plugin-only-warn';



export default tseslint.config(
    ...eslintConfigBase,
    ...eslintConfigReact,


    // ...react,
    // ...reactHooks,
    // ...reactRefresh,
    // ...reactCompiler,
    // ...jsxA11y,
    // ...reactJsxControlStatements,
);