import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  [
    {
      title: <>Out-of-the-box Scalastyle integration</>,
      imageUrls: ["img/scalastyle.png"],
      description: (
        <>
          Sonar-scala provides 65 built-in{" "}
          <a href="http://www.scalastyle.org/http://www.scalastyle.org">
            Scalastyle
          </a>{" "}
          inspections, which are automatically checked on SonarQube analysis -
          no extra setup required.
        </>
      )
    },
    {
      title: <>Support for Scapegoat</>,
      imageUrls: ["img/scapegoat.png"],
      description: (
        <>
          Sonar-scala provides a seamless integration with{" "}
          <a href="https://github.com/sksamuel/scapegoat">Scapegoat</a>.
          Generate a Scapegoat report by running <code>sbt scapegoat</code> and
          sonar-scala will process it and create issues in SonarQube based on
          your quality profile. 118 Scapegoat inspections are supported by
          sonar-scala.
        </>
      )
    }
  ],
  [
    {
      title: <>Built-in quality profiles for Scala</>,
      imageUrls: ["img/quality-profiles.png"],
      description: (
        <>
          Sonar-scala provides two rules repositories and four built-in quality
          profiles - one for <code>Scalastyle</code>, one for{" "}
          <code>Scapegoat</code> as well as a combination of those two:{" "}
          <code>Scalastyle+Scapegoat</code> and the{" "}
          <code>Recommended by sonar-scala</code> profile, which is a subset of
          those that we recommend for the best results.
        </>
      )
    }
  ],
  [
    {
      title: <>Support for Scoverage</>,
      imageUrls: ["img/"],
      description: <>...</>
    },
    {
      title: <>Minimal setup effort</>,
      imageUrls: ["img/"],
      description: (
        <>
          Thanks to provided Docker <a href="">images</a> of SonarQube with
          bundled sonar-scala and a dedicated sbt plugin,{" "}
          <a href="https://github.com/mwz/sbt-sonar">sbt-sonar</a>, you can be
          up and running and scanning your projects in a matter of minutes.
        </>
      )
    }
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
        "img/pr-decoration-status-check.png"
      ],
      description: <>...</>
    }
  ]
];

function Feature({ imageUrls, title, description }) {
  const imgs = imageUrls.map((img, i) => useBaseUrl(img));
  return (
    <div className={classnames("col", styles.col)}>
      {!imgs.isEmpty && (
        <div className="text--center">
          <div className="row">
            {imgs.map((img, i) => (
              <div className="col">
                <img
                  className={styles.featureImage}
                  src={useBaseUrl(img)}
                  alt={title}
                />
              </div>
            ))}
          </div>
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
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
          <img src={useBaseUrl("img/logo.svg")} />
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                "button button--lg button--secondary",
                styles.getStarted
              )}
              to={useBaseUrl("docs/doc1")}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              {features.map((items, i) => (
                <div
                  className={classnames("row", "padding-vert--lg", styles.row)}
                >
                  {items.map((item, j) => (
                    <Feature key={i * 100 + j} {...item} />
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
