const { reportFileSizeImpact, readGithubWorkflowEnv } = require("@jsenv/file-size-impact");

reportFileSizeImpact({
  ...readGithubWorkflowEnv(),
  projectDirectoryUrl: process.env.GITHUB_WORKSPACE,
  installCommand: "npm install",
  buildCommand: "npm run build:prod",
  trackingConfig: {
    lib: {
      "./lib/umd/*.js": true,
      "./lib/umd/*.map": false,
    },
  },
});
