export function addEvent (el, eventName, callback) {
    if (el.addEventListener) {
        el.addEventListener(eventName, callback, false);
    } else if (el.attachEvent) {
        el.attachEvent(`on${eventName}`, callback);
    }
}

export function delEvent (el, eventName, callback) {
    if (el.removeEventListener) {
        el.removeEventListener(eventName, callback, false);
    } else if (el.detachEvent) {
        el.detachEvent(`on${eventName}`, callback);
    }
}
