const withLess = require('@zeit/next-less');
const withTypescript = require('@zeit/next-typescript');

module.exports = withTypescript(
  withLess({
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: "[local]___[hash:base64:5]",
    },
    distDir: '../.next',
    webpack: (cfg) => {
      cfg.module.rules.push(
          {
              test: /\.md$/,
              use: 'frontmatter-markdown-loader'
          }
      );

      if (cfg.mode === 'development' && cfg.name === 'client') {
        cfg.module.rules[2].use[2].loader = require.resolve('typings-for-css-modules-loader');
        cfg.module.rules[2].use[2].options.namedExport = true;
        cfg.module.rules[2].use[2].options.camelCase = true;
      }

      return cfg;
    }
  })
);