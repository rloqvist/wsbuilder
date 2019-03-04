#!/usr/bin/env sh

yarn
yarn build
mkdir build
cp _redirects build/
