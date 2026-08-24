import { fileURLToPath } from 'node:url';

import { defineConfig } from 'vitest/config';

const resolvePath = (path: string) =>
  fileURLToPath(new URL(path, import.meta.url));

export default defineConfig({
  resolve: {
    alias: {
      '@': resolvePath('./src'),
      '@test': resolvePath('./tests'),
    },
  },

  // Projeto Node puro: impede o Vite de procurar/aplicar config de PostCSS.
  css: {
    postcss: { plugins: [] },
  },

  test: {
    // Imports explicitos de `describe/it/expect` a partir de 'vitest'.
    globals: false,
    environment: 'node',
    // Permite que uma suite ainda vazia (integration/e2e) nao quebre o run.
    passWithNoTests: true,

    // `extends: true` e obrigatorio no Vitest 4 para os projects herdarem
    // os aliases e o environment definidos acima (vira default no Vitest 5).
    projects: [
      {
        extends: true,
        test: {
          name: 'unit',
          include: ['tests/unit/**/*.spec.ts'],
          testTimeout: 5_000,
        },
      },
      {
        extends: true,
        test: {
          name: 'integration',
          include: ['tests/integration/**/*.spec.ts'],
          testTimeout: 30_000,
          hookTimeout: 60_000,
        },
      },
      {
        extends: true,
        test: {
          name: 'e2e',
          include: ['tests/e2e/**/*.spec.ts'],
          testTimeout: 30_000,
          hookTimeout: 120_000,
        },
      },
    ],

    coverage: {
      provider: 'v8',
      reporter: ['text', 'html', 'lcov'],
      // Mede apenas o codigo de producao, nunca os proprios testes.
      include: ['src/**/*.ts'],
      exclude: ['src/**/*.d.ts', 'src/core/types/**'],
    },
  },
});
