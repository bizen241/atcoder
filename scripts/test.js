const { spawn } = require("child_process");

const commands = {
  cbf: {
    compile: "cobc -x -free -O2 -o ./a.out ./Main.cbf",
    execute: "./a.out"
  },
  ts: {
    compile: "tsc ./main.ts --target ESNext --moduleResolution Node --module CommonJS",
    execute: "node main.js",
  },
  kt: {
    compile: "kotlinc ./main.kt -include-runtime -d ./main.jar -XXLanguage:+InlineClasses",
    execute: "/usr/lib/jvm/java-11-openjdk-amd64/bin/java -cp ./main.jar MainKt",
  },
  php: {
    compile: "php -l ./main.php",
    execute: "php ./main.php"
  }
};

const spawnOptions = {
  cwd: process.env.INIT_CWD,
  stdio: "inherit",
};
const oj = (c) => spawn("oj", ["t", "-N", "-d", "./tests", "-c", c], spawnOptions)

const lang = commands[process.argv[2]];
if (lang === undefined) {
  process.exit();
}

const { compile, execute } = lang;

if (!compile) {
  oj(execute);
} else {
  const [command, ...args] = compile.split(" ");

  spawn(command, args, spawnOptions).on("close", () => oj(execute));
}
