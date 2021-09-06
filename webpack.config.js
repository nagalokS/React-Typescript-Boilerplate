const MiniCss = require("mini-css-extract-plugin");
const HtmlWebpack = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { DefinePlugin } = require("webpack");
module.exports = {
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCss(),
    new HtmlWebpack({
      template: "./src/index.html",
    }),
    new DefinePlugin({ "process.env.DICK_SIZE": "SO FUCKING BIG" }),
  ],
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.(?:ico|png|jpe?g|gif|webp)$/i,
        type: "asset/resource", //  resource \\ inline
        // parser: {
        //   dataUrlCondition: {
        //     maxSize: 30 * 1024,
        //   },
        // },
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: "asset/inline",
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(sc|c)ss$/i,
        use: [
          {
            loader: MiniCss.loader,
            options: { publicPath: "" },
          },
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
        exclude: /\.module\.(sc|c)ss$/i,
      },
      {
        test: /\.module\.(sc|c)ss$/i,
        use: [
          {
            loader: MiniCss.loader,
            options: { publicPath: "" },
          },
          {
            loader: "css-loader",
            options: {
              modules: {
                mode: "local",
                localIdentName: "[name]_[local]__[hash:base64:5]",
              },
            },
          },
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },
  devServer: {
    /*port:8080 */
    contentBase: "./build",
    open: true,
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
