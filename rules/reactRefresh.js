import tseslint from "typescript-eslint";
import reactRefreshPlugin from "eslint-plugin-react-refresh";



export const reactRefresh = tseslint.config({
    plugins: {
        "react-refresh": reactRefreshPlugin,
    },
    rules: {
        "react-refresh/only-export-components": [
            "warn",
            { "allowConstantExport": true }
        ]
    }
})