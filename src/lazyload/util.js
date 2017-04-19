const throttle = function (callback, delay = 200, context) {
    let tc;
    let lastTime;
    let currTime;
    const scope = context || this;

    return function (...args) {
        currTime = +new Date();
        if (!lastTime) { // first time to call the func
            callback.apply(scope, args);
            lastTime = currTime;
        } else if (currTime - lastTime > delay) {
            callback.apply(scope, args);
            lastTime = currTime;
        } else {
            const extraTime = delay - (currTime - lastTime);
            clearTimeout(tc);
            tc = setTimeout(() => {
                callback.apply(scope, args);
                lastTime = +new Date();
            }, extraTime);
        }
    };
};

const debounce = function (callback, delay = 200, context) {
    let tc;
    let lastTime;
    let currTime;
    const scope = context || this;

    return function (...args) {
        currTime = +new Date();
        if (!lastTime) {
            callback.apply(scope, args);
            lastTime = currTime;
        }

        clearTimeout(tc);

        tc = setTimeout(() => {
            callback.apply(scope, args);
            lastTime = currTime;
        }, delay);
    };
};

const getScrollParent = (node) => {
    if (!node) {
        return document.documentElement;
    }

    const excludeStaticParent = node.style.position === 'absolute';
    const overflowRegex = /(scroll|auto)/;
    let parent = node;

    while (parent) {
        if (!parent.parentNode) {
            return node.ownerDocument || document.documentElement;
        }

        const style = window.getComputedStyle(parent);
        const position = style.position;
        const overflow = style.overflow;
        const overflowX = style['overflow-x'];
        const overflowY = style['overflow-y'];

        if (position === 'static' && excludeStaticParent) {
            continue;
        }

        if (overflowRegex.test(overflow) && overflowRegex.test(overflowX) && overflowRegex.test(overflowY)) {
            return parent;
        }

        parent = parent.parentNode;
    }

    return node.ownerDocument || node.documentElement || document.documentElement;
};

export default {
    throttle,
    debounce,
    getScrollParent
};
