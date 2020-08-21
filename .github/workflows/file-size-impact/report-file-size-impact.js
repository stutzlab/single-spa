const { reportFileSizeImpact, readGithubWorkflowEnv } = require("@jsenv/file-size-impact");

reportFileSizeImpact({
  ...readGithubWorkflowEnv(),
  buildCommand: "npm run build:prod",
  trackingConfig: {
    lib: {
      "./lib/umd/*.js": true,
      "./lib/umd/*.map": false,
    },
  },
});
