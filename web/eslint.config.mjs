import nextVitals from "eslint-config-next/core-web-vitals"
import nextTypescript from "eslint-config-next/typescript"
import eslintPluginBetterTailwindcss from "eslint-plugin-better-tailwindcss"
import compat from "eslint-plugin-compat"
import { defineConfig } from "eslint/config"

export default defineConfig([
    ...nextVitals,
    ...nextTypescript,
    compat.configs["flat/recommended"],
    {
        ignores: [
            "node_modules/**",
            ".next/**",
            "out/**",
            "build/**",
            "next-env.d.ts",
            "convex/_generated/**",
        ],
    },
    {
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
