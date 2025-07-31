import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./vitest.setup.ts'],
    exclude: ['**/node_modules/**', '**/build/**', '**/examples/**', '**/*.js'],
    coverage: {
      include: ['src/**/*.{ts,tsx}'],
      exclude: [
        '**/node_modules/**',
        '**/build/**',
        '**/examples/**',
        '**/*.js',
        '**/src/lib/**',
      ],
    },
  },
})
