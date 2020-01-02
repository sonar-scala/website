/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  docs: [
    {
      type: "category",
      label: "About",
      items: [
        "about/what-is-sonar-scala",
        "about/supported-metrics",
        "about/quality-rules-and-profiles",
        "about/compatibility-with-sonarqube"
      ]
    },
    {
      type: "category",
      label: "Setup",
      items: [
        "setup/getting-started",
        "setup/sonar-scanner-properties",
        "setup/sbt-sonar",
        "setup/pr-decoration"
        // "setup/troubleshooting"
      ]
    },
    {
      type: "doc",
      id: "changelog"
    }
  ]
};
