const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");
const path = require("path");

const config = getDefaultConfig(__dirname);

// 1. Point directly to the folder containing your index.css
config.watchFolders = [path.resolve(__dirname, "../shared-tokens")];

config.resolver.nodeModulesPaths = [
  path.resolve(__dirname, "node_modules"),
  path.resolve(__dirname, "../node_modules"),
];

// 2. Force Metro to aggressively look for configuration updates
config.transformer.enableBabelRCLookup = true;

module.exports = withNativeWind(config, {
  input: "./global.css",
});
