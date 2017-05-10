import React from 'react';

export function browser (navigator) {
    let tem;
    const ua = navigator.userAgent;
    let M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if (/trident/i.test(M[1])) {
        tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
        return `IE ${tem[1] || ''}`;
    }
    if (M[1] === 'Chrome') {
        tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
        if (tem) return tem.slice(1).join(' ').replace('OPR', 'Opera');
    }
    M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
    tem = ua.match(/version\/(\d+)/i);
    if (tem) {
        M.splice(1, 1, tem[1]);
    }
    return M.join(' ');
}

/* eslint-disable */
export function getOffset(ele) {
  let doc, win, docElem, rect;

  if (!ele.getClientRects().length) {
    return { top: 0, left: 0 };
  }

  rect = ele.getBoundingClientRect();

  if (rect.width || rect.height) {
    doc = ele.ownerDocument;
    win = doc.defaultView;
    docElem = doc.documentElement;

    return {
      top: rect.top + win.pageYOffset - docElem.clientTop,
      left: rect.left + win.pageXOffset - docElem.clientLeft
    };
  }

  return rect;
}
/* eslint-enable */

function getChildrenlength (children) {
    let len = 1;
    if (Array.isArray(children)) {
        len = children.length;
    }
    return len;
}

function getSiblingPosition (index, len, siblingPosition) {
    const siblingPositionCopy = siblingPosition;
    if (len === 1) {
        siblingPositionCopy.first = true;
        siblingPositionCopy.last = true;
    } else {
        siblingPositionCopy.first = index === 0;
        siblingPositionCopy.last = index === len - 1;
    }
    return siblingPositionCopy;
}

export function loopAllChildren (childs, callback, parent) {
    const loop = (children, level, _parent) => {
        const len = getChildrenlength(children);
        React.Children.forEach(children, (item, index) => {
            const pos = `${level}-${index}`;
            if (item.props.children && item.type && item.type.isTreeNode) {
                loop(item.props.children, pos, { node: item, pos });
            }
            callback(item, index, pos, item.key || pos, getSiblingPosition(index, len, {}), _parent);
        });
    };
    loop(childs, 0, parent);
}

export function isInclude (smallArray, bigArray) {
    return smallArray.every((ii, i) => {
        return ii === bigArray[i];
    });
}
// console.log(isInclude(['0', '1'], ['0', '10', '1']));


// arr.length === 628, use time: ~20ms
export function filterParentPosition (arr) {
    const levelObj = {};
    arr.forEach((item) => {
        const posLen = item.split('-').length;
        if (!levelObj[posLen]) {
            levelObj[posLen] = [];
        }
        levelObj[posLen].push(item);
    });
    const levelArr = Object.keys(levelObj).sort((a, b) => Number(a) - Number(b));
    for (let i = 0; i < levelArr.length; i++) {
        if (levelArr[i + 1]) {
            levelObj[levelArr[i]].forEach((ii) => {
                for (let j = i + 1; j < levelArr.length; j++) {
                    levelObj[levelArr[j]].forEach((_i, index) => {
                        if (isInclude(ii.split('-'), _i.split('-'))) {
                            levelObj[levelArr[j]][index] = null;
                        }
                    });
                    levelObj[levelArr[j]] = levelObj[levelArr[j]].filter(p => p);
                }
            });
        }
    }
    let nArr = [];
    levelArr.forEach((i) => {
        nArr = nArr.concat(levelObj[i]);
    });
    return nArr;
}

function stripTail (str) {
    const arr = str.match(/(.+)(-[^-]+)$/);
    let st = '';
    if (arr && arr.length === 3) {
        st = arr[1];
    }
    return st;
}

function splitPosition (pos) {
    return pos.split('-');
}

export function handleCheckState (obj, checkedPositionArr, checkIt) {
  // console.log(stripTail('0-101-000'));
    const objCopy = obj;
    let objKeys = Object.keys(objCopy);
    // let s = Date.now();
    objKeys.forEach((i, index) => {
        const iArr = splitPosition(i);
        let saved = false;
        checkedPositionArr.forEach((_pos) => {
        // 设置子节点，全选或全不选
            const posArr = splitPosition(_pos);
            if (iArr.length > posArr.length && isInclude(posArr, iArr)) {
                objCopy[i].halfChecked = false;
                objCopy[i].checked = checkIt;
                objKeys[index] = null;
            }
            if (iArr[0] === posArr[0] && iArr[1] === posArr[1]) {
            // 如果
                saved = true;
            }
        });
        if (!saved) {
            objKeys[index] = null;
        }
    });
  // TODO: 循环 2470000 次耗时约 1400 ms。 性能瓶颈！
  // console.log(Date.now()-s, checkedPositionArr.length * objKeys.length);
    objKeys = objKeys.filter(i => i); // filter non null;

    for (let pIndex = 0; pIndex < checkedPositionArr.length; pIndex++) {
        // 循环设置父节点的 选中 或 半选状态
        const loop = (__pos) => {
            const posLen = splitPosition(__pos).length;
            if (posLen <= 2) { // e.g. '0-0', '0-1'
                return;
            }
            let sibling = 0;
            let siblingChecked = 0;
            const parentPosition = stripTail(__pos);
            objKeys.forEach((i /* , index*/) => {
                const iArr = splitPosition(i);
                if (iArr.length === posLen && isInclude(splitPosition(parentPosition), iArr)) {
                    sibling += 1;
                    if (objCopy[i].checked) {
                        siblingChecked += 1;
                        const ip = checkedPositionArr.indexOf(i);
                        if (ip > -1) {
                            checkedPositionArr.splice(ip, 1);
                            if (ip <= pIndex) {
                                pIndex -= 1;
                            }
                        }
                    } else if (objCopy[i].halfChecked) {
                        siblingChecked += 0.5;
                    }
                // objKeys[index] = null;
                }
            });
        // objKeys = objKeys.filter(i => i); // filter non null;
            const parent = objCopy[parentPosition];
        // sibling 不会等于0
        // 全不选 - 全选 - 半选
            if (siblingChecked === 0) {
                parent.checked = false;
                parent.halfChecked = false;
            } else if (siblingChecked === sibling) {
                parent.checked = true;
                parent.halfChecked = false;
            } else {
                parent.halfChecked = true;
                parent.checked = false;
            }
            loop(parentPosition);
        };
        loop(checkedPositionArr[pIndex], pIndex);
    }
  // console.log(Date.now()-s, objKeys.length, checkIt);
}

export function getCheck (treeNodesStates) {
    const halfCheckedKeys = [];
    const checkedKeys = [];
    const checkedNodes = [];
    const checkedNodesPositions = [];
    Object.keys(treeNodesStates).forEach((item) => {
        const itemObj = treeNodesStates[item];
        if (itemObj.checked) {
            checkedKeys.push(itemObj.key);
            checkedNodes.push(itemObj.node);
            checkedNodesPositions.push({ node: itemObj.node, pos: item });
        } else if (itemObj.halfChecked) {
            halfCheckedKeys.push(itemObj.key);
        }
    });
    return {
        halfCheckedKeys, checkedKeys, checkedNodes, checkedNodesPositions, treeNodesStates
    };
}

export function getStrictlyValue (checkedKeys, halfChecked) {
    if (halfChecked) {
        return { checked: checkedKeys, halfChecked };
    }
    return checkedKeys;
}

export function arraysEqual (a, b) {
    if (a === b) return true;
    if (a === null || typeof a === 'undefined' || b === null || typeof b === 'undefined') {
        return false;
    }
    if (a.length !== b.length) return false;

    // If you don't care about the order of the elements inside
    // the array, you should sort both arrays here.

    for (let i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}
