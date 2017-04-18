/**
 * Author : yingu
 * Date : 16/11/3
 * Description :
 */
var fs = require('fs');
var path = require('path');
var dir = require('node-dir');
var options = {encoding: 'UTF8'};
var reportPath = path.resolve(__dirname, '../report/test-summary.txt');
var packageJson = path.resolve(__dirname, '../package.json');
var src = path.resolve(__dirname, '../src');
var demo = path.resolve(__dirname, '../demo');
var readme = path.resolve(__dirname, '../README.md');

var checker = {
    check: function () {
        this.package = fs.readFileSync(packageJson, options);
        this.checkReport();
        this.checkKeyword();
        this.checkReadme();
        this.checkDefault();
    },
    checkReport: function () {
        var testResult = {
            "statements": 0,
            "branches": 0,
            "functions": 0,
            "lines": 0
        };

        if (fs.existsSync(reportPath)) {
            var summary = fs.readFileSync(reportPath, options);
            console.log(summary);

            for (var key in testResult) {
                var reg = new RegExp(key + '[^\\d]+(\\d+\.?\\d+)%', 'ig');
                reg.exec(summary);
                testResult[key] = Number(RegExp.$1) || 0;
            }

            if (testResult.statements === 100 && testResult.branches === 100 &&
                testResult.functions === 100 && testResult.lines === 100 ) {
                testResult = {
                    "statements": 0,
                    "branches": 0,
                    "functions": 0,
                    "lines": 0
                };
            }
        }

        this.writePackage(testResult);
    },
    checkKeyword: function () {
        var keyword = JSON.parse(this.package).keyword;
        var wds = keyword.split(/\s+|,/);
        if (wds.length < 3) {
            throw new Error('package.json中的keyword少于3个!');
        }
    },
    checkReadme: function () {
        var defaultValue = "# 组件概述\n\n# CHANGELOG";
        if (fs.readFileSync(readme, options) === defaultValue) {
            throw new Error('请补充README.md!');
        }
    },
    checkDefault: function () {
        dir.paths(src, function (err, paths) {
            if (err) throw err;
            if (JSON.stringify(paths.dirs).indexOf('MyComponent') > -1) {
                throw new Error('请删除src中的MyComponent这类默认资源!');
            }
        });

        if (fs.existsSync(demo)) {
            dir.paths(demo, function (err, paths) {
                if (err) throw err;
                if (JSON.stringify(paths.dirs).indexOf('MyComponent') > -1) {
                    throw new Error('请删除demo中的MyComponent这类默认资源!');
                }

                console.log(JSON.stringify(paths.files).indexOf('.html'));

                if (JSON.stringify(paths.files).indexOf('.html') === -1) {
                    throw new Error('不需要demo时请删除demo目录');
                }
            });
        }
    },
    writePackage: function (testResult) {
        var reg = /"testResult"[^}]+({[^}]+})/ig;
        reg.exec(this.package);
        var newPackage = this.package.replace(RegExp.$1, JSON.stringify(testResult));
        fs.writeFileSync(packageJson, newPackage);
    }
};

checker.check();