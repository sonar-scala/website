#!/usr/bin/env bash
set -e

export VERSION=$(jq -r .version vars.json)
cd docs/rules &&
  coursier launch com.github.mwz:sonar-scala_2.13:$VERSION \
    -r https://dl.bintray.com/mwz/maven &&
  cd ../../
