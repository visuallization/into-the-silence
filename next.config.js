const withLess = require('@zeit/next-less');

module.exports = withLess({
  cssModules: true,
  webpack: (cfg) => {
    cfg.module.rules.push(
        {
            test: /\.md$/,
            use: 'frontmatter-markdown-loader'
        }
    )
    return cfg;
  }
});