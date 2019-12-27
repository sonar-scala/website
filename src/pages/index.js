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
      imageUrls: ["img/"],
      description: <>...</>
    },
    {
      title: <>Support for Scapegoat</>,
      imageUrls: ["img/"],
      description: <>...</>
    }
  ],
  [
    {
      title: <>Built-in quality profiles for Scala</>,
      imageUrls: ["img/quality-profiles.png"],
      description: <>...</>
    }
  ],
  [
    {
      title: (
        <>
          GitHub pull request decoration{" "}
          <sup>
            <span class="badge badge--danger">New!</span>
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
    <div className={classnames("col", styles.feature)}>
      {!imgs.isEmpty && (
        <div className="text--center">
          <div class="row">
            {imgs.map((img, i) => (
              <div class="col">
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
                <div className="row padding-vert--lg">
                  {items.map((item, j) => (
                    <Feature key={i * 10 + j} {...item} />
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
