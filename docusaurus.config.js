const path = require("path");

module.exports = {
  title: "sonar-scala",
  tagline:
    "A free and open-source SonarQube plugin for static code analysis of Scala projects",
  url: "https://sonar-scala.com",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "sonar-scala",
  projectName: "website",
  themeConfig: {
    colorMode: {
      disableSwitch: true,
    },
    image: "img/logo.png",
    navbar: {
      hideOnScroll: true,
      title: "sonar-scala",
      logo: {
        alt: "logo",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "docs/about/what-is-sonar-scala",
          label: "Docs",
          position: "right",
        },
        { to: "docs/changelog", label: "Changelog", position: "right" },
        {
          href: "https://github.com/sonar-scala/sonar-scala",
          label: "GitHub",
          position: "right",
        },
        {
          href: "https://gitter.im/sonar-scala/sonar-scala",
          label: "Chat",
          position: "right",
        },
      ],
    },
    prism: {
      theme: require("prism-react-renderer/themes/github"),
    },
    footer: {
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "About",
              to: "docs/about/what-is-sonar-scala",
            },
            {
              label: "Get started",
              to: "docs/setup/getting-started",
            },
            {
              label: "Changelog",
              to: "docs/changelog",
            },
          ],
        },
        {
          title: "Get help",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/sonar-scala/sonar-scala/issues",
            },
            {
              label: "Chat on Gitter",
              href: "https://gitter.im/sonar-scala/sonar-scala",
            },
          ],
        },
        {
          title: "Related projects",
          items: [
            {
              label: "sbt-sonar",
              href: "https://github.com/sonar-scala/sbt-sonar",
            },
            {
              label: "sonar-scala-docker",
              href: "https://github.com/sonar-scala/sonar-scala-docker",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} sonar-scala. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          sidebarCollapsed: false,
          editUrl: "https://github.com/sonar-scala/website/edit/master/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "GTM-TQFZXKB",
          anonymizeIP: true,
        },
        googleAnalytics: {
          trackingID: "UA-25197264-1",
        },
      },
    ],
  ],
  plugins: [path.resolve(__dirname, "nofs.js")],
};
