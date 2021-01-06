# AtCoder

## Requirements

- Ubuntu 20.04

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

### C#

```sh
$ sudo apt install mono-devel
$ yarn test cs
```

### COBOL

```sh
$ sudo apt install open-cobol
$ yarn test cbf
```

### Fortran

```sh
$ sudo apt install gfortran
$ yarn test f
```

### Go

```sh
$ sudo apt install golang-1.14-go
$ echo 'export PATH=/usr/lib/go-1.14/bin:$PATH' >> ~/.bashrc
$ yarn test go
```

### Java

```sh
$ sudo apt install openjdk-11-jdk-headless
$ yarn test java
```

### TypeScript

```sh
$ yarn
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

### Perl

```sh
$ sudo apt install perl
$ yarn test pl
```

### PHP

```sh
$ sudo apt install php7.4
$ yarn test php
```

### Python

```sh
$ sudo apt install python3.8
$ yarn test py
```

### Ruby

```sh
$ sudo apt install ruby
$ yarn test rb
```

### Rust

```sh
$ curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
$ yarn test rs
```

### Swift

```sh
$ sudo apt install libz3-dev
$ curl -L -O https://swift.org/builds/swift-5.3.2-release/ubuntu2004/swift-5.3.2-RELEASE/swift-5.3.2-RELEASE-ubuntu20.04.tar.gz
$ tar -zxf swift-5.3.2-RELEASE-ubuntu20.04.tar.gz
$ sudo mv swift-5.3.2-RELEASE-ubuntu20.04 /usr/local
$ echo 'export PATH=/usr/local/swift-5.3.2-RELEASE-ubuntu20.04/usr/bin:$PATH' >> ~/.bashrc
$ yarn test swift
```
