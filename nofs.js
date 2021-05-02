module.exports = function (context, options) {
  return {
    name: "nofs-plugin",
    configureWebpack(config, isServer, utils) {
      return {
        module: {
          rules: [
            {
              test: /node_modules\/vfile\/core\.js/,
              use: [
                {
                  loader: "imports-loader",
                  options: {
                    type: "commonjs",
                    imports: ["single process/browser process"],
                  },
                },
              ],
            },
          ],
        },
        resolve: {
          alias: {
            path: require.resolve("path-browserify"),
            process: "process/browser",
          },
          fallback: {
            fs: false,
            http: require.resolve("stream-http"),
            https: require.resolve("https-browserify"),
            process: false,
          },
        },
      };
    },
  };
};
