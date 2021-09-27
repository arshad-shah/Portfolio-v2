const { setHeadlessWhen } = require("@codeceptjs/configure");

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: "./e2e/*_test.js",
  output: "./e2e/output",
  helpers: {
    WebDriver: {
      url: "http://localhost:9515",
      browser: "edge",
    },
  },
  include: {
    I: "./e2e/steps_file.js",
  },
  bootstrap: null,
  mocha: {},
  name: "arshad-shah.github.io",
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true,
    },
    tryTo: {
      enabled: true,
    },
    screenshotOnFail: {
      enabled: true,
    },
  },
};
