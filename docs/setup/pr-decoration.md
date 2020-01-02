---
title: Pull Request Decoration
---

Starting from version `7.8.0`, sonar-scala can be run in a decoration mode,
which can analyse Github pull requests and make comments on any new issues
directly on the pull request.

This functionality is similar to what was provided by the
[GitHub Plugin](https://docs.sonarqube.org/display/PLUG/GitHub+Plugin), which
was deprecated in SonarQube 7.2 and replaced by similar functionality in the
paid Developer Edition. SonarCloud also offers PR analysis, but it requires a
paid subscription for private projects.

<div className="alert alert--info" role="alert">
  <b>Sonar-scala brings Github PR decoration functionality for free to the
  Community Edition of SonarQube!</b>
</div>

See some examples below:

![](/img/pr-decoration-example1.png)

![](/img/pr-decoration-example2.png)

Sonar-scala also reports a status check at the end of the analysis - passed if
no critical or blocker issues are found, or failed otherwise.

![](/img/pr-decoration-status-check.png)

## Configuration

- Create a new dedicated Github account, or you can use your existing bot/CI
  account if you already have one.
- Generate a new personal access token for your account. The token can be
  generated in the [developer settings](https://github.com/settings/tokens) on
  Github. Select the `public_repo` scope for public repositories or `repo` for
  private repositories (or a mix of public and private repositories).
- Make sure you give your user write permissions to the repositories you want to
  decorate your PRs for, otherwise sonar-scala will fail as it won't be able to
  set a status of the PR check.

## Usage

Before you execute PR decoration, you need to check out to the latest commit of
the branch which was used to open the pull request. Once you've done that, you
can run sonar-scala in decoration mode by setting the following properties:

- **sonar.scala.pullrequest.provider** - currently, only `github` is supported
- **sonar.scala.pullrequest.number** - number of the pull request; if you use
  CircleCI, you can use the `CIRCLE_PR_NUMBER` env variable, Travis has
  `TRAVIS_PULL_REQUEST`
- **sonar.scala.pullrequest.github.repository** - name of the repository
  including organisation name in the following format `org/project`, e.g.
  `mwz/sonar-scala` or `scala/scala`, etc.
- **sonar.scala.pullrequest.github.oauth** - Github personal access token; can
  be generated in the [developer settings](https://github.com/settings/tokens)
  on Github; select the `public_repo` scope for public repositories or `repo`
  for private repositories (or a mix of public and private repositories)

Optional:

- **sonar.scala.pullrequest.dryrun** - execute PR decoration in "dry run" mode
  (sonar-scala will not post the results to Github). This setting is useful for
  testing purposes in combination with `sonar.verbose=true`. You usually won't
  need to use this setting, unless you run into any issues.

Once you run sonar-scala in decoration mode, instead of sending the results to
SonarQube it will post the relevant comments to Github, which results in
creating an empty project in SonarQube. This is necessary to make this feature
work since the Community Edition of SonarQube doesn't have the support for
branch analysis. Sonar-scala works around that limitation by having an empty
project so that it can still be executed, analyse your code and post any
comments back to Github.

You can create an empty project yourself, or you can let sonar-scala do this for
you. If your SonarQube instance requires authentication to execute an analysis,
you need to make sure that your user has the right permissions to create a new
project and execute an analysis, or just the permission to execute analysis if
you created a new project yourself. Once you created a new blank project, you
can use it across all of your projects.

![](/img/pr-decoration-sonarqube.png)

The following example shows how to run sonar-scala in decoration mode for pull
request [1](https://github.com/mwz/sonar-scala-pr-annotation-example/pull/1) in
the
[mwz/sonar-scala-pr-annotation-example](https://github.com/mwz/sonar-scala-pr-annotation-example)
repository on Github. Notice the project name and key are set to match the
dedicated blank project in SonarQube, which isn't the same project you would
normally use to execute an analysis in a "normal" mode.

```bash
sbt \
  -Dsonar.host.url=http://localhost \
  -Dsonar.projectName='PR Decoration' \
  -Dsonar.projectKey=pr-decoration \
  -Dsonar.scala.pullrequest.provider=github \
  -Dsonar.scala.pullrequest.number=1 \
  -Dsonar.scala.pullrequest.github.repository=mwz/sonar-scala-pr-annotation-example \
  -Dsonar.scala.pullrequest.github.oauth=REDACTED \
  sonarScan
```

If you want to have this automated by your CI, which is ideally how it's
intended to be used, the pull request setting will be different for each pull
request. Most of the modern CI tools allow you to use a built-in environment
variable to get the current pull request number, e.g. CircleCI has
`CIRCLE_PR_NUMBER` and Travis provides `TRAVIS_PULL_REQUEST`.

Please remember that if you use the Scapegoat integration, you still need to
generate scapegoat report before executing sonar-scala by running
`sbt scapegoat` - otherwise any Scapegoat issues in your project won't be
reported back to Github.
