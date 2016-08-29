// (function (win) {
//     var LOGIN_URL = '/pc/user/login';

//     var NO_LOGIN_WHITE_LIST = {
//         'home':         /^\/?$/,

//         'help':         /^\/pc\/shopadmin\/help(\/.*)*$/,
//         'joinMarket':   /^\/pc\/joinmarket(\/.+)?$/,
//         'user':         /^\/pc\/user\/(login|register|findpassword|verify)\/?$/
//     };

//     function isURLInWhiteList(URL) {
//         return _.some(NO_LOGIN_WHITE_LIST, function (route, name) {
//             return route.test(URL);
//         });
//     }

//     var _ie = (function(){
//         var undef,rv = -1; // Return value assumes failure.
//         var ua = window.navigator.userAgent;
//         var msie = ua.indexOf('MSIE ');
//         var trident = ua.indexOf('Trident/');

//         if (msie > 0) {
//             // IE 10 or older => return version number
//             rv = parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
//         } else if (trident > 0) {
//             // IE 11 (or newer) => return version number
//             var rvNum = ua.indexOf('rv:');
//             rv = parseInt(ua.substring(rvNum + 3, ua.indexOf('.', rvNum)), 10);
//         }

//         return ((rv > -1) ? rv : undef);
//     }());

//     var CrossLogin = {
//         REFER_KEY: 'global.redirect'
//     };

//     CrossLogin.login = function () {
//         window.localStorage.setItem(CrossLogin.REFER_KEY, location.href);
//         window.location.href = LOGIN_URL;
//     };

//     CrossLogin.redirect = function () {
//         var redirectURL = window.localStorage.getItem(CrossLogin.REFER_KEY);

//         if (redirectURL) {
//             window.localStorage.removeItem(CrossLogin.REFER_KEY);
//         }
//         else {
//             redirectURL = '/pc/shopadmin/shopface';
//         }

//         window.location.href = redirectURL;
//     };

//     CrossLogin.setSign = function (token, callback) {
//         /*if (_ie) {//ceshi2
//          CrossLogin.redirect();
//          return;
//          }*/
//         $.ajax({
//             url: 'http://portal.mogujie.com/api/cross/mogujie/setsign',
//             type: 'GET',
//             data: {
//                 crossToken: token
//             },
//             dataType: 'jsonp'
//         }).done(function (code) {
//             if (+code === 1001) {
//                 if (callback && _.isFunction(callback)) {
//                     callback();
//                 }
//                 else {
//                     CrossLogin.redirect();
//                 }
//             }
//         });
//     };

//     CrossLogin.checkXDSign = function (loginData) {
//         var URL = location.pathname.toLowerCase();
//         var inLoginPage = NO_LOGIN_WHITE_LIST.user.test(URL);

//         if (loginData.status.code === 1001) {
//             if (inLoginPage) {
//                 CrossLogin.redirect();
//             }
//             else {
//                 if (XD.UserInfo) {
//                     XD.UserInfo.setUserInfo(loginData.result);
//                 }
//             }
//         }
//         else {
//             if (!inLoginPage && !isURLInWhiteList(URL)) {
//                 CrossLogin.login();
//             }
//             else {
//                 if (XD.UserInfo) {
//                     XD.UserInfo.setUserInfo(null);
//                 }
//             }
//         }
//     };


//     if (_ie) {
//         $.ajax({
//             url: '/api/cross/xiaodian/getsign',
//             type: 'POST',
//             dataType: 'json'
//         }).done(function (loginData) {
//             CrossLogin.checkXDSign(loginData);
//         });
//     } else if (window.isMeilishuo) {
//         $.ajax({
//             url: '/pc/user_info',
//             type: 'GET',
//             dataType: 'json'
//         }).done(function (loginData) {
//             CrossLogin.checkXDSign(loginData);
//         });
//     }
//     else {
//         $.ajax({
//             url: 'http://portal.mogujie.com/api/cross/mogujie/getsign',
//             type: 'GET',
//             dataType: 'jsonp'
//         }).done(function (sign) {
//             $.ajax({
//                 url: '/api/cross/xiaodian/setsign',
//                 type: 'POST',
//                 data: {
//                     crossToken: sign
//                 },
//                 dataType: 'json'
//             }).done(function (loginData) {
//                 CrossLogin.checkXDSign(loginData);
//             });
//         });
//     }

//     var XD = win.XD || {};

//     XD.CrossLogin = CrossLogin;

//     win.XD = XD;
// })(window);
