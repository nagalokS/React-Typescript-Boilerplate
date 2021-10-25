const path = require("path");
const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.config.js");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
module.exports = merge(baseConfig, {
  target: "browserslist",
  mode: "production",
  // devtool: "cheap-module-source-map",
  output: {
    path: path.resolve(__dirname, "build"),
    assetModuleFilename: "images/[hash][ext][query]",
  },
  devServer: {
    hot: false,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: process.env.ANAL || "disabled",
    }),
  ],
});
