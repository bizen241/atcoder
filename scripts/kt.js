// @ts-check

const { spawn } = require("child_process");

spawn(
  "kotlinc",
  [
    "./main.kt",
    "-include-runtime",
    "-d",
    "./main.jar",
    "-XXLanguage:+InlineClasses",
  ],
  {
    cwd: process.env.INIT_CWD,
    stdio: "inherit",
  }
).on("close", () => {
  spawn(
    "oj",
    ["t", "-d", "./tests", "-c", "	/usr/lib/jvm/java-11-openjdk-amd64/bin/java -cp ./main.jar MainKt"],
    {
      cwd: process.env.INIT_CWD,
      stdio: "inherit",
    }
  );
});
