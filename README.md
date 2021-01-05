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

### COBOL

```sh
$ sudo apt install build-essential libgmp-dev libdb-dev
$ curl -L -O https://sourceforge.net/projects/gnucobol/files/open-cobol/1.1/open-cobol-1.1.tar.gz
$ tar -zxvf open-cobol-1.1.tar.gz
$ cd open-cobol-1.1
$ ./configure
$ make
$ sudo make install
$ sudo ldconfig
$ yarn test cbf
```

### TypeScript

```sh
$ yarn
$ npm install -g typescript@3.8.3
$ yarn test ts
```

### Kotlin

```sh
$ sudo apt install zip
$ curl "https://get.sdkman.io" | bash
$ sdk install kotlin 1.3.71
$ sudo apt install openjdk-11-jdk-headless
$ yarn test kt
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
$ yarn test php
```
