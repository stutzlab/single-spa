const { reportFileSizeImpact, readGithubWorkflowEnv } = require("@jsenv/file-size-impact");

reportFileSizeImpact({
  ...readGithubWorkflowEnv(),
  projectDirectoryUrl: process.env.GITHUB_WORKSPACE,
  installCommand: "npm install",
  buildCommand: "npm run build",
  trackingConfig: {
    lib: {
      "./lib/**/*.js": true,
      "./lib/**/*.map": false,
    },
  },
});
