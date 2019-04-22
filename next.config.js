const withLess = require('@zeit/next-less');
const withTypescript = require('@zeit/next-typescript');
const WebpackShellPlugin = require('webpack-shell-plugin');
const webpack = require('webpack')

module.exports = withTypescript(
  withLess({
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: "[local]___[hash:base64:5]",
    },
    webpack: (cfg) => {
      cfg.module.rules.push(
          {
              test: /\.md$/,
              use: 'frontmatter-markdown-loader'
          }
      );
      cfg.plugins.push(new WebpackShellPlugin({
        onBuildStart: ['yarn build:style-typings'],
        dev: false, // makes sure command runs on file change
      }))
      cfg.plugins.push(new webpack.WatchIgnorePlugin([
        /less\.d\.ts$/
      ]))
      return cfg;
    }
  })
);