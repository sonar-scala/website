#!/usr/bin/env bash
set -e

export VERSION=$(jq -r .version vars.json)
cd docs/rules &&
  coursier launch com.sonar-scala:sonar-scala_2.13:$VERSION &&
  cd ../../
