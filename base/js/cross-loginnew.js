// (function (win) {
//     var LOGIN_URL = '/pc/user/login';

//     //需要登录可以直接根据链接访问的页面
//     var NO_LOGIN_WHITE_LIST = {
//         'home':         /^\/?$/,

//         'help':         /^\/pc\/shopadmin\/help(\/.*)*$/,
//         'joinMarket':   /^\/pc\/joinmarket(\/.+)?$/,
//         'error':        /^\/pc\/error(\/.+)?$/,
//         'user':         /^\/pc\/user\/(login|register|findpassword|verify)\/?$/
//     };

//     //测试url是否属于不需要登录即可访问的链接列表
//     function isURLInWhiteList(URL) {
//         return _.some(NO_LOGIN_WHITE_LIST, function (route, name) {
//             return route.test(URL);
//         });
//     }

//     var _ie = (function(){
//         var undef,rv = -1; // Return value assumes failure.
//         var ua = window.navigator.userAgent;//判断浏览器类型及版本
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
//             // 登录状态为1001时，如果用户在登录页面，则把页面跳转到小店首页
//             if (inLoginPage) {
//                 CrossLogin.redirect();
//             }
//             // 登录状态为1001时，如果用户不在登录页面，则保持原状，把登录信息保存在全局变量中
//             else {
//                 if (XD.UserInfo) {
//                     XD.UserInfo.setUserInfo(loginData.result);
//                 }
//             }
//         }
//         else {
//             // 如果登录状态不是1001时，用户不在登录页，并且用户不在无需登录页面，
//             // 则刷新页面，并把当前页面的路由加入localStorage里面
//             // 等登录成功后跳转回来
//             if (!inLoginPage && !isURLInWhiteList(URL)) {
//                 if (XD.UserInfo) {
//                     XD.UserInfo.setUserInfo(null);
//                 }
//                 CrossLogin.login();
//             }
//             else {
//                 if (XD.UserInfo) {
//                     XD.UserInfo.setUserInfo(null);
//                 }
//             }
//         }
//     };

//     // 美丽说商家后台登录
//     if (window.isMeilishuo) {
//         $.ajax({
//             url: '/pc/user_info',
//             type: 'GET',
//             dataType: 'json'
//         }).done(function (loginData) {
//             CrossLogin.checkXDSign(loginData);
//         });
//     // 小店登录
//     // ie 浏览器默认禁用第三方cookie (取不到蘑菇街登录信息)
//     // 则直接获取小店的登录信息
//     } else if (_ie) {
//         $.ajax({
//             url: '/api/cross/xiaodian/getsign',
//             type: 'POST',
//             dataType: 'json'
//         }).done(function (loginData) {
//             CrossLogin.checkXDSign(loginData);
//         });
//     } 
//     // 小店登录
//     // 非ie浏览器处理逻辑 
//     // 但也考虑非ie浏览器禁用第三方cookie的情况(取不到蘑菇街登录信息)
//     else {
//         // 为了区分蘑菇街未登录 和 未取到蘑菇街登录信息( 禁用第三方cookie时取不到 )两种情况，加入了check这个接口
//         $.ajax({
//             url: 'http://portal.mogujie.com/api/cross/mogujie/check',
//             type: 'GET',
//             dataType: 'jsonp'
//         }).always( function(resData){
//             $.ajax({
//                 url: 'http://portal.mogujie.com/api/cross/mogujie/getsign',
//                 type: 'GET',
//                 dataType: 'jsonp'
//             }).done(function (sign) {
//                 // 未取到蘑菇街登录信息( 禁用第三方cookie时取不到 )
//                 // 则直接获取小店自己的登录信息
//                 if (sign == 4004) {
//                     $.ajax({
//                         url: '/api/cross/xiaodian/getsign',
//                         type: 'POST',
//                         dataType: 'json'
//                     }).done(function (loginData) {
//                         CrossLogin.checkXDSign(loginData);
//                     });
//                     return;
//                 } 
//                 // 如果正常返回token信息则设置小店的登录状态
//                 if ( sign ) {
//                     $.ajax({
//                         url: '/api/cross/xiaodian/setsign',
//                         type: 'POST',
//                         data: {
//                             crossToken: sign
//                         },
//                         dataType: 'json'
//                     }).done(function (loginData) {
//                         CrossLogin.checkXDSign(loginData);
//                     });
//                 // 如果没有正常返回token( 蘑菇街主站未登录 ),则清除小店的登录信息
//                 } else {
//                     $.ajax({
//                         url: '/api/login/logout',
//                         type: 'GET',
//                         dataType: 'json'
//                     }).done(function(loginData){
//                         // 小店退出成功则判断当前页面是否是在登录页或者是白名单页面
//                         // 如果不在，则跳转到小店首页
//                         var URL = location.pathname.toLowerCase();
//                         var inLoginPage = NO_LOGIN_WHITE_LIST.user.test(URL);
//                         if (!inLoginPage && !isURLInWhiteList(URL)) {
//                             window.location.href = "/";
//                         }
//                     });
//                 }            

//             });
//         });
        
//     }

//     var XD = win.XD || {};

//     XD.CrossLogin = CrossLogin;

//     win.XD = XD;
// })(window);
