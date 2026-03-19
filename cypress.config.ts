import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    viewportWidth: 1920,
    viewportHeight: 1080,
    video: true,
    screenshotOnRunFailure: true,
    setupNodeEvents(on, config) {
    },
  },
  
  defaultCommandTimeout: 10000,
  pageLoadTimeout: 30000,
  
  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
  },
});
