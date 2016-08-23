import jsdom from 'jsdom';

if (typeof document === 'undefined') {
    global.document = jsdom.jsdom('<!doctype html><html><body><div id="main-wrapper" class="app"></div></body></html>');
    global.window = document.defaultView;
    global.navigator = global.window.navigator;
}