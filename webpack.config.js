const MiniCss = require('mini-css-extract-plugin');
const HtmlWebpack = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const MediaQueryPlugin = require('media-query-plugin');
const { DefinePlugin } = require('webpack');
const { InjectManifest } = require('workbox-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  plugins: [
    new MediaQueryPlugin({
      include: ['example'],
      queries: {
        'screen and (min-width: 45em)': 'd',
      },
    }),
    new MiniCss(),
    new HtmlWebpack({
      template: './src/index.html',
    }),
    new DefinePlugin({ 'process.env.DICK_SIZE': 'SO FUCKING BIG' }),
    new InjectManifest({
      swSrc: './src/sw.js',
      swDest: 'sw.js',
    }),
    new CopyPlugin({
      patterns: [
        { from: './src/logos/152.png', to: 'logos' },
        { from: './src/logos/192.png', to: 'logos' },
        { from: './src/logos/384.png', to: 'logos' },
        { from: './src/logos/512.png', to: 'logos' },
        { from: './src/logos/favicon.ico', to: 'logos' },
        { from: './src/manifest.json', to: '' },
      ],
    }),
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
          MediaQueryPlugin.loader,
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
