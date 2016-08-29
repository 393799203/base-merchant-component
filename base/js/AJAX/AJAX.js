/*function formatParams(data) {
        var arr = [];
        for (var name in data) {
            arr.push(encodeURIComponent(name) + "=" + encodeURIComponent(data[name]));
        }
        arr.push(("v=" + Math.random()).replace(".",""));
        return arr.join("&");
    }*/
function addURLParam(url,obj) {
    if(typeof obj == 'object') {
        url += (url.indexOf('?') == -1 ? '?' : '&');
        for(var temp in obj) {
            url += encodeURIComponent(temp) + "=" + encodeURIComponent(obj[temp]) + '&';
        }
        let len = url.length;
        if(url.lastIndexOf('&') == len - 1) {
            url = url.substring(0,len-1)
        }
        return url;
    } else {
        return url
    }
}

function ajax(options) {
        options = options || {};
        options.type = (options.type || "GET").toUpperCase();
        options.dataType = options.dataType || "json";
        var params = options.data;

        //创建 - 非IE6 - 第一步
        if (window.XMLHttpRequest) {
            var xhr = new XMLHttpRequest();
        } else { //IE6及其以下版本浏览器
            var xhr = new ActiveXObject('Microsoft.XMLHTTP');
        }

        //接收 - 第三步
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                var status = xhr.status;
                if (status >= 200 && status < 300) {
                    options.success && options.success(xhr.responseText, xhr.responseXML);
                } else {
                    options.fail && options.fail(status);
                }
            }
        }

        //连接 和 发送 - 第二步
        if (options.type == "GET") {
            let url = addURLParam(options.url,params);
           // xhr.open("GET", options.url , true);
            xhr.open("GET",url, true);
            xhr.send(null);
        } else if (options.type == "POST") {
            xhr.open("POST", options.url, true);
            //设置表单提交时的内容类型
           // xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded"); 
            xhr.send(params);
        }
    };

module.exports = ajax;