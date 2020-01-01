---
title: What is sonar-scala?
---

Sonar-scala is an independent SonarQube plugin for static code analysis of Scala
projects. It's developed by the [community]()

It uses the [scalariform](https://github.com/scala-ide/scalariform) library to
parse the source code in a version independent way and integrates with
[Scoverage](http://scoverage.org) (code coverage),
[Scalastyle](http://www.scalastyle.org) and
[Scapegoat](https://github.com/sksamuel/scapegoat) (static code analysis). It
also provides [pull request decoration](../setup/pull-request-decoration)
functionality, which can review pull requests on Github and make comments on new
issues directly in the pull request instead of reporting them to SonarQube.

## How does it work?

<!-- TODO: -->
