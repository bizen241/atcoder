#!/bin/bash
problemname=$1
script_dir=$(cd $(dirname $0); pwd)
src_dir=${script_dir}/src
cd ${src_dir}/$1

oj login "https://${problemname:0:6}.contest.atcoder.jp/tasks/${problemname:0:8}"

if [ ! -e test/ ]; then
  oj dl "https://${problemname:0:6}.contest.atcoder.jp/tasks/${problemname:0:8}"
fi

g++ -Wall -std=c++14 ${src_dir}/$1/$1.cpp
oj test
rm -f a.out
