import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Highlight from "@theme/CodeBlock";
import Layout from "@theme/Layout";
import classnames from "classnames";
import dedent from "dedent";
import React from "react";
import styles from "./styles.module.css";

const features = [
  [
    {
      title: <>Out-of-the-box Scalastyle integration</>,
      imageUrls: ["img/scalastyle.png"],
      description: (
        <>
          sonar-scala provides 70 built-in{" "}
          <a href="http://www.scalastyle.org">Scalastyle</a> inspections, which
          are automatically checked on SonarQube analysis - no extra setup
          required.
        </>
      ),
    },
    {
      title: <>Support for Scapegoat</>,
      imageUrls: ["img/scapegoat.png"],
      description: (
        <>
          sonar-scala provides a seamless integration with{" "}
          <a href="https://github.com/sksamuel/scapegoat">Scapegoat</a>.
          Generate a Scapegoat report and sonar-scala will process it and create
          issues in SonarQube based on your quality profile. There are 118
          Scapegoat inspections that are supported by sonar-scala.
        </>
      ),
    },
  ],
  [
    {
      title: <>Built-in quality profiles for Scala</>,
      imageUrls: ["img/quality-profiles.png"],
      description: (
        <>
          sonar-scala provides two rules repositories and four built-in quality
          profiles - one for <code>Scalastyle</code>, one for{" "}
          <code>Scapegoat</code> as well as a combination of those two:{" "}
          <code>Scalastyle+Scapegoat</code> and the{" "}
          <code>Recommended by sonar-scala</code> profile, which is a subset of
          those that we recommend for the best results.
        </>
      ),
    },
  ],
  [
    {
      title: <>Coverage and unit test metrics</>,
      imageUrls: ["img/scoverage.png"],
      description: (
        <>
          sonar-scala integrates with{" "}
          <a href="http://scoverage.org">Scoverage</a> and reports coverage
          results back to SonarQube. It also reads JUnit-style reports produced
          by testing frameworks like{" "}
          <a href="http://www.scalatest.org">ScalaTest</a> or{" "}
          <a href="https://etorreborre.github.io/specs2">Specs2</a> and turns
          those into test metrics in SonarQube.
        </>
      ),
    },
  ],
  [
    {
      title: <>Minimal setup effort</>,
      codeSnippet: (
        <Highlight>
          {dedent`
            docker run -p 80:9000 -d \ 
              mwizner/sonarqube-scala-plugins:latest-full

            sbt -Dsonar.host.url=http://localhost \ 
              clean coverage test coverageReport scapegoat sonarScan
          `}
        </Highlight>
      ),
      description: (
        <>
          Thanks to provided Docker{" "}
          <a href="https://github.com/sonar-scala/sonar-scala-docker">images</a>{" "}
          of SonarQube with bundled sonar-scala and a dedicated sbt plugin,{" "}
          <a href="https://github.com/sonar-scala/sbt-sonar">sbt-sonar</a>, you
          can be up and running and try out sonar-scala in a matter of minutes.
        </>
      ),
    },
  ],
  [
    {
      title: (
        <>
          GitHub pull request decoration{" "}
          <sup>
            <span className="badge badge--danger">New!</span>
          </sup>
        </>
      ),
      imageUrls: [
        "img/pr-decoration-example.png",
        "img/pr-decoration-status-check.png",
      ],
      description: (
        <>
          sonar-scala can be run in a "decoration mode", which can analyse your
          pull requests from GitHub and any new issues introduced in the
          codebase will be posted as inline comments directly on the pull
          request. GitHub Enterprise is also supported.
        </>
      ),
    },
  ],
];

function Feature({ imageUrls, codeSnippet, title, description }) {
  const imgs = imageUrls ? imageUrls : [];
  return (
    <div className={classnames("col", styles.col)}>
      <h3>{title}</h3>
      <p>{description}</p>
      {!imgs.isEmpty && !codeSnippet && (
        <div className="text--center">
          <div className="row padding-bottom--md">
            {imgs.map((img, i) => (
              <div className="col" key={i}>
                <img className={styles.featureImage} src={img} alt={title} />
              </div>
            ))}
          </div>
        </div>
      )}
      {codeSnippet && (
        <div className="row padding-bottom--md">
          <div className="col">{codeSnippet}</div>
        </div>
      )}
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="A free and open-source SonarQube plugin for static code analysis of Scala projects"
    >
      <header className={classnames("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <img src="img/logo.svg" />
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                "button button--lg button--secondary",
                styles.getStarted
              )}
              to="docs/setup/getting-started"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container padding-top--lg">
              {features.map((items, i) => (
                <div
                  className={classnames("row", "padding-vert--lg", styles.row)}
                  key={i}
                >
                  {items.map((item, j) => (
                    <Feature key={j} {...item} />
                  ))}
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
