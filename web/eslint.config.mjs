import nextVitals from "eslint-config-next/core-web-vitals"
import nextTypescript from "eslint-config-next/typescript"
import eslintPluginBetterTailwindcss from "eslint-plugin-better-tailwindcss"
import compat from "eslint-plugin-compat"
import { defineConfig, globalIgnores } from "eslint/config"

export default defineConfig([
    globalIgnores(["convex/_generated/**"]),
    ...nextVitals,
    ...nextTypescript,
    compat.configs["flat/recommended"], // https://github.com/amilajack/eslint-plugin-compat
    {
        // https://github.com/schoero/eslint-plugin-better-tailwindcss
        extends: [eslintPluginBetterTailwindcss.configs.recommended],
        rules: {
            "better-tailwindcss/enforce-consistent-line-wrapping": ["warn", { printWidth: 100 }],
            "better-tailwindcss/no-unknown-classes": ["warn", { ignore: ["animate-fade-in"] }],
        },
        settings: {
            "better-tailwindcss": { entryPoint: "src/app/globals.css" },
        },
    },
])
