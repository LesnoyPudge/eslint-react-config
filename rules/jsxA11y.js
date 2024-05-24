import tseslint from "typescript-eslint";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";



export const jsxA11y = tseslint.config({
    plugins: {
        "jsx-a11y": jsxA11yPlugin,
    },
    rules: {}
})