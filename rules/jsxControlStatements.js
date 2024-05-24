import tseslint from "typescript-eslint";
import reactJsxControlStatementsPlugin from "eslint-plugin-jsx-control-statements";
import { fixupPluginRules } from "@eslint/compat";



export const reactJsxControlStatements = tseslint.config({
    plugins: {
        'jsx-control-statements': fixupPluginRules(
            reactJsxControlStatementsPlugin
        ),
    },
    languageOptions: {
        globals: (
            reactJsxControlStatementsPlugin
                .environments["jsx-control-statements"].globals    
        ),
    },
    rules: {
        "jsx-control-statements/jsx-choose-not-empty": "warn",
        "jsx-control-statements/jsx-for-require-each": "warn",
        "jsx-control-statements/jsx-for-require-of": "warn",
        "jsx-control-statements/jsx-for-require-body": "warn",
        "jsx-control-statements/jsx-if-require-condition": "warn",
        "jsx-control-statements/jsx-otherwise-once-last": "warn",
        "jsx-control-statements/jsx-use-if-tag": "warn",
        "jsx-control-statements/jsx-when-require-condition": "warn",
        // "jsx-control-statements/jsx-jcs-no-undef": "warn",
        // "no-undef": "off", // Replace this with jsx-jcs-no-undef
        // "react/jsx-no-undef": ["warn", { "allowGlobals": true }],
    }
})