const { parseArgsStringToArgv } = require("string-argv");
const { spawn } = require("child_process");

const commands = {
  cs: {
    compile: "mcs -warn:0 -o+ -unsafe -r:System.Numerics -langversion:latest ./Main.cs -out:./Main.exe",
    execute: "mono ./Main.exe"
  },
  cbf: {
    compile: "cobc -x -free -O2 -o ./a.out ./Main.cbf",
    execute: "./a.out"
  },
  f: {
    compile: "gfortran -O2 -o ./a.out ./Main.f08",
    execute: "./a.out"
  },
  go: {
    compile: "go build -buildmode=exe -o ./a.out ./Main.go",
    execute: "./a.out"
  },
  java: {
    compile: "/usr/lib/jvm/java-11-openjdk-amd64/bin/javac ./Main.java",
    execute: "/usr/lib/jvm/java-11-openjdk-amd64/bin/java Main"
  },
  ts: {
    compile: "tsc ./main.ts --target ESNext --moduleResolution Node --module CommonJS",
    execute: "node main.js",
  },
  kt: {
    compile: "kotlinc ./main.kt -include-runtime -d ./Main.jar -XXLanguage:+InlineClasses",
    execute: "/usr/lib/jvm/java-11-openjdk-amd64/bin/java -cp ./Main.jar MainKt",
  },
  pl: {
    compile: "perl -W -c ./Main.pl",
    execute: "perl -X ./Main.pl"
  },
  php: {
    compile: "php -l ./main.php",
    execute: "php ./main.php"
  },
  py: {
    execute: "python3.8 ./Main.py",
  },
  rb: {
    compile: "ruby -w -c ./Main.rb",
    execute: "ruby ./Main.rb"
  },
  rs: {
    compile: "bash -c 'cp ./main.rs ./../../../config/rust/src/main.rs && cargo build --release --quiet --manifest-path=./../../../config/rust/Cargo.toml && cp ./../../../config/rust/target/release/main ./a.out'",
    execute: "./a.out",
  },
  swift: {
    compile: "swiftc -Ounchecked -o ./a.out ./Main.swift",
    execute: "./a.out"
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
  const argv = parseArgsStringToArgv(args.join(" "));

  spawn(command, argv, spawnOptions).on("close", () => oj(execute));
}
