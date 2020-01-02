---
title: Getting Started
---

Download the latest [release](https://github.com/mwz/sonar-scala/releases) jar
into your SonarQube plugins folder `/opt/sonarqube/extensions/plugins` and
restart SonarQube either manually or using the update center.

For an out-of-the-box setup, you can use the following docker-compose recipe or
a docker image with SonarQube which contains bundled sonar-scala plugin. Please
see [mwz/sonar-scala-docker](https://github.com/mwz/sonar-scala-docker) for more
details or simply follow this guide.

For automating the analysis of your Scala projects, check out
[mwz/sbt-sonar](https://github.com/mwz/sbt-sonar) sbt plugin and the
documentation [here](sbt-sonar.md).

Also, see the
[examples](https://github.com/mwz/sonar-scala/tree/master/examples) directory,
which includes sample projects for SBT _(`1.x`)_, Gradle _(`5.x`)_ and Maven
_(`3.x`)_ along with basic instructions on how to execute SonarQube analysis for
each of those projects.

## Quick start

```
docker run -p 80:9000 -d \
  mwizner/sonarqube-scala-plugins:latest-full
```

Scoverage

sbt-sonar

<div className="alert alert--warning" role="alert">
  Running analysis from a Windows machine is currently not supported - please
  use Linux or other Unix-like operating system.
</div>
