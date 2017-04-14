#!/usr/bin/env bash

set -x

yarn

./node_modules/.bin/jest --config .jestrc.json

git checkout es6

yarn

./node_modules/.bin/jest --config .jestrc.json
