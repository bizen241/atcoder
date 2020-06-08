// @ts-check

const { spawn } = require("child_process");

spawn(
  "npx",
  [
    "tsc",
    "./main.ts",
    "--target",
    "ESNext",
    "--moduleResolution",
    "Node",
    "--module",
    "CommonJS",
  ],
  {
    cwd: process.env.INIT_CWD,
    stdio: "inherit",
  }
).on("close", () => {
  spawn("oj", ["t", "-d", "./tests", "-c", "node main.js"], {
    cwd: process.env.INIT_CWD,
    stdio: "inherit",
  });
});
