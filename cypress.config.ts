import {defineConfig} from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:4200",
    experimentalStudio: true,
    setupNodeEvents(on, config) {
    },
    env: {
      // https://github.com/bahmutov/cypress-slow-down
      commandDelay: 500,
    },
  },
});
