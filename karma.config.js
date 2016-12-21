var path = require('path');
var webpack = require('karma-webpack');

module.exports = function (config) {
    config.set({
        browsers: ['Chrome'],
        files: [
            'http://up.f2e.mogujie.org/static/theme-forest/css/base.css',
            'https://s10.mogucdn.com/__static/template/pc/common/assets/lib/jquery-1.7.2.js',
            'spec/setup.js',
            'tests.webpack.js'
        ],
        frameworks: [
            'jasmine'
        ],
        preprocessors: {
            'tests.webpack.js': ['webpack', 'sourcemap']
        },
        webpack: {
            cache: true,
            devtool: 'inline-source-map',
            externals: {
                'jsdom': 'window',
                'cheerio': 'window',
                'react/lib/ExecutionEnvironment': true,
                'react/addons': true,
                'react/lib/ReactContext': 'window'
            },
            module: {
                preLoaders: [
                    {
                        test: /\.spec.js$/,
                        include: /spec/,
                        exclude: /(bower_components|node_modules)/,
                        loader: 'babel',
                        query: {
                            cacheDirectory: true
                        }
                    },
                    {
                        test: /\.js?$/,
                        include: /src/,
                        exclude: /(node_modules|bower_components|spec)/,
                        loader: 'babel-istanbul',
                        query: {
                            cacheDirectory: true
                        }
                    }
                ],
                loaders: [
                    {
                        test: /\.js$/,
                        include: path.resolve(__dirname, '../src'),
                        exclude: /(bower_components|node_modules)/,
                        loader: 'babel',
                        query: {
                            cacheDirectory: true,
                            presets: ['react', 'es2015','stage-2'],
                            plugins: ['add-module-exports', 'transform-object-assign']
                        }
                    },
                    {
                        test: /\.less$/,
                        loader: "style!css!less"
                    }
                ]
            }
        },
        reporters: ['progress','html','coverage'],
        coverageReporter: {
            dir: 'report',
            reporters: [
                {type: 'html', subdir: 'coverage'},
                { type: 'text-summary', subdir: '.', file: 'test-summary.txt' }
            ]
        },
        htmlReporter: {
            outputDir: 'report/', // where to put the reports
            templatePath: null, // set if you moved jasmine_template.html
            focusOnFailures: true, // reports show failures on start
            namedFiles: false, // name files instead of creating sub-directories
            pageTitle: null, // page title for reports; browser info by default
            urlFriendlyName: false, // simply replaces spaces with _ for files/dirs
            reportName: 'report', // report summary filename; browser info by default
        },
        plugins: [
            webpack,
            'karma-jasmine',
            'karma-chrome-launcher',
            'karma-coverage',
            'karma-html-reporter'
        ],
        failOnEmptyTestSuite : false
    });
};
