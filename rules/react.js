import tseslint from "typescript-eslint";
import reactPlugin from "eslint-plugin-react";
import { fixupPluginRules } from "@eslint/compat";


export const react = tseslint.config({
    plugins: {
        react: fixupPluginRules(reactPlugin),
    },
    settings: {
        react: {
            version: 'detect'
        }
    },
    rules: {
        // "react/jsx-no-undef": ["warn", { "allowGlobals": true }]
    }
})