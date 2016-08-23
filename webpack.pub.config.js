var config = require('./webpack.config');
config.entry = {
  'up': ['./src/**/index.less', './src/**/index.js']
  // 'demo': ['./src/main.js']
};
config.externals = {
  'react': {
    root: 'React',
    commonjs2: 'react',
    commonjs: 'react',
    amd: 'react'
  },
  'react-dom': {
    root: 'ReactDOM',
    commonjs2: 'react-dom',
    commonjs: 'react-dom',
    amd: 'react-dom'
  }
};
config.output.library = 'up';
config.output.libraryTarget = 'umd';
module.exports = config;
