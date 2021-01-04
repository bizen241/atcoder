# AtCoder

## Install

### online-judge-tools

```sh
$ sudo apt install python3 python3-pip
$ pip3 install online-judge-tools
$ oj login https://atcoder.jp/
```

### atcoder-cli

```sh
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
$ nvm install 12.16.1
$ npm install -g atcoder-cli
$ acc login
```

## Languages

### TypeScript

```sh
$ yarn
$ npm install -g typescript@3.8.3
```

### Kotlin

```sh
$ sudo apt install zip
$ curl -s "https://get.sdkman.io" | bash
$ sdk install kotlin 1.3.71
$ sudo apt install openjdk-11-jdk-headless
```

### PHP

```sh
$ sudo apt install build-essential libbz2-dev libreadline-dev libsqlite3-dev libssl-dev libxml2-dev libxslt1-dev php7.4-cli php7.4-bz2 pkg-config
$ curl -L -O "https://github.com/phpbrew/phpbrew/releases/latest/download/phpbrew.phar"
$ chmod +x phpbrew.phar
$ sudo mv phpbrew.phar /usr/local/bin/phpbrew
$ phpbrew init
$ echo "[[ -e ~/.phpbrew/bashrc ]] && source ~/.phpbrew/bashrc" >> ~/.bashrc
$ phpbrew update
$ phpbrew install 7.4.4 +neutral
$ phpbrew switch 7.4.4
```
