import tseslint from "typescript-eslint";
import reactHooksPlugin from 'eslint-plugin-react-hooks'



export const reactHooks = tseslint.config({
    plugins: {
        'react-hooks': reactHooksPlugin,
    },
    rules: {
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn'
    }
})