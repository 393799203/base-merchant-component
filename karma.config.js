/* eslint-disable */
var path = require('path');
var webpackConfig = require('./webpack.config.js');

webpackConfig.cache = true;
webpackConfig.devtool = 'inline-source-map';
webpackConfig.externals = {
    'jsdom': 'window',
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/addons': true,
    'react/lib/ReactContext': 'window'
};

webpackConfig.module.preLoaders = [
    {
        test: /\.jsx?$/,
        include: /src/,
        exclude: /(node_modules|bower_components|test)/,
        loader: 'babel-istanbul',
        query: {
            cacheDirectory: true
        }
    }
];

module.exports = function (config) {
    config.set({
        browsers: ['Chrome'],
        files: [
            'http://up.f2e.mogujie.org/static/theme-forest/css/base.css',
            'http://up.f2e.mogujie.org/static/theme-forest/css/theme.css',
            'https://s10.mogucdn.com/__static/template/pc/common/assets/lib/jquery-1.7.2.js',
            'test/setup.js',
            'test/*/index.js'
        ],
        frameworks: ['mocha', 'chai', 'sinon'],
        preprocessors: {
            'test/*/index.js': ['webpack', 'sourcemap']
        },
        webpack: webpackConfig,
        reporters: ['mocha','coverage'],
        coverageReporter: {
            dir: 'report',
            reporters: [
                {type: 'html', subdir: './'}
            ]
        },
        plugins: [
            'karma-webpack',
            'karma-mocha',
            'karma-chai',
            'karma-sinon',
            'karma-sourcemap-loader',
            'karma-chrome-launcher',
            'karma-coverage',
            'karma-mocha-reporter'
        ],
        failOnEmptyTestSuite: false,
        client: {
            mocha: { timeout: 6000 }
        }
    });
};
/* eslint-enable */
