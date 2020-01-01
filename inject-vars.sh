#!/usr/bin/env bash
set -e

for file in docs/*.md docs/**/*.md; do
  echo $file
  npx mustache vars.json $file > $file.out
  mv -f $file.out $file
done
