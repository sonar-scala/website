module.exports = function(context, options) {
  return {
    name: "nofs-plugin",
    configureWebpack(config, isServer, utils) {
      return {
        node: {
          fs: "empty"
        }
      };
    }
  };
};
