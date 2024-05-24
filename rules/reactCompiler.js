import tseslint from "typescript-eslint";
import reactCompilerPlugin from 'eslint-plugin-react-compiler'



export const reactCompiler = tseslint.config({
    plugins: {
        'react-compiler': reactCompilerPlugin,
    },
    rules: {
        "react-compiler/react-compiler": "warn"
    }
})