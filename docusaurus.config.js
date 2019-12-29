module.exports = {
  title: "sonar-scala",
  tagline:
    "A free and open-source SonarQube plugin for static code analysis of Scala projects",
  url: "https://sonar-scala.github.io",
  baseUrl: "/website/",
  favicon: "img/favicon.ico",
  organizationName: "sonar-scala",
  projectName: "website",
  themeConfig: {
    disableDarkMode: true,
    image: "img/logo.png",
    navbar: {
      title: "sonar-scala",
      logo: {
        alt: "logo",
        src: "img/logo.svg"
      },
      links: [
        // { to: "docs/doc1", label: "Docs", position: "left" },
        {
          href: "https://github.com/mwz/sonar-scala",
          label: "GitHub",
          position: "right"
        }
      ]
    },
    prism: {
      theme: require("prism-react-renderer/themes/github")
    },
    sidebarCollapsible: false,
    footer: {
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Get started",
              to: "https://github.com/mwz/sonar-scala#--sonar-scala"
            },
            {
              label: "Releases",
              to: "https://github.com/mwz/sonar-scala/releases"
            }
          ]
        },
        {
          title: "Get help",
          items: [
            {
              label: "Github",
              href:
                "https://github.com/mwz/sonar-scala/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc"
            },
            {
              label: "Gitter",
              href: "https://gitter.im/sonar-scala/sonar-scala"
            }
          ]
        },
        {
          title: "Related projects",
          items: [
            {
              label: "sbt-sonar",
              href: "https://github.com/mwz/sbt-sonar"
            },
            {
              label: "sonar-scala-docker",
              href: "https://github.com/mwz/sonar-scala-docker"
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} sonar-scala. Built with Docusaurus.`
    }
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/sonar-scala/website/edit/master/"
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ]
};
