import js from '@eslint/js';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';

export default [
    js.configs.recommended,
    {
        files: ['**/*.ts'],
        plugins: {
            '@typescript-eslint': typescript
        },
        languageOptions: {
            parser: typescriptParser,
            parserOptions: {
                project: './tsconfig.json'
            }
        },
        rules: {
            // ここにルールを追加
        }
    }
];