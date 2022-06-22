const MiniCss = require('mini-css-extract-plugin');
const HtmlWebpack = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const MediaQueryPlugin = require('media-query-plugin');
const { DefinePlugin } = require('webpack');
module.exports = {
  plugins: [
    // new MediaQueryPlugin({
    //   include: ['example'],
    //   queries: {
    //     'screen and (min-width: 45em)': 'd',
    //   },
    // }),
    new MiniCss({
      filename: '[name][hash].css',
    }),
    new HtmlWebpack({
      template: './src/index.html',
    }),
    new DefinePlugin({ 'process.env.DICK_SIZE': 'SO FUCKING BIG' }),
  ],
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.(?:ico|png|jpe?g|gif|webp|svg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/,
        type: 'asset/inline',
      },
      {
        test: /\.[tj]sx?$/i,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        },
      },
      {
        test: /\.(sc|c)ss$/i,
        use: [
          MiniCss.loader,
          'css-loader',
          MediaQueryPlugin.loader,
          'postcss-loader',
          'sass-loader',
        ],
        exclude: /\.module\.(sc|c)ss$/i,
      },
      {
        test: /\.module\.(sc|c)ss$/i,
        use: [
          {
            loader: MiniCss.loader,
            options: { publicPath: '' },
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[local]__[hash:base64:5]',
              },
            },
          },
          // MediaQueryPlugin.loader,
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
  devServer: {
    /*port:8080 */
    host: 'localhost',
    open: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', 'json'],
    plugins: [new TsconfigPathsPlugin()],
  },
};
