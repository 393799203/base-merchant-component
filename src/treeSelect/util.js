import React from 'react';

export function getValuePropValue (child) {
    const props = child.props;
    if ('value' in props) {
        return props.value;
    }
    if (child.key) {
        return child.key;
    }
    throw new Error(`no key or value for ${child}`);
}

export function getPropValue (child, prop) {
    if (prop === 'value') {
        return getValuePropValue(child);
    }
    return child.props[prop];
}

export function isCombobox (props) {
    return props.combobox;
}

export function isMultipleOrTags (props) {
    return props.multiple || props.tags || props.treeCheckable;
}

export function isMultipleOrTagsOrCombobox (props) {
    return isMultipleOrTags(props) || isCombobox(props);
}

export function isSingleMode (props) {
    return !isMultipleOrTagsOrCombobox(props);
}

export function toArray (value) {
    let ret = value;
    if (value === undefined) {
        ret = [];
    } else if (!Array.isArray(value)) {
        ret = [value];
    }
    return ret;
}

export function preventDefaultEvent (e) {
    e.preventDefault();
}

export const UNSELECTABLE_STYLE = {
    userSelect: 'none',
    WebkitUserSelect: 'none'
};

export const UNSELECTABLE_ATTRIBUTE = {
    unselectable: 'unselectable'
};


export function labelCompatible (prop) {
    let newProp = prop;
    if (newProp === 'label') {
        newProp = 'title';
    }
    return newProp;
}


export function isInclude (smallArray, bigArray) {
  // attention: [0,0,1] [0,0,10]
    return smallArray.every((ii, i) => {
        return ii === bigArray[i];
    });
}

function getChildrenlength (children) {
    let len = 1;
    if (Array.isArray(children)) {
        len = children.length;
    }
    return len;
}

function getSiblingPosition (index, len, $siblingPosition) {
    const siblingPosition = $siblingPosition;
    if (len === 1) {
        siblingPosition.first = true;
        siblingPosition.last = true;
    } else {
        siblingPosition.first = index === 0;
        siblingPosition.last = index === len - 1;
    }
    return siblingPosition;
}

export function loopAllChildren (childs, callback, parent) {
    const loop = (children, level, _parent) => {
        const len = getChildrenlength(children);
        React.Children.forEach(children, function handler(item, index) { // eslint-disable-line
            const pos = `${level}-${index}`;
            if (item && item.props.children && item.type) {
                loop(item.props.children, pos, { node: item, pos });
            }
            if (item) {
                callback(item, index, pos, item.key || pos, getSiblingPosition(index, len, {}), _parent);
            }
        });
    };
    loop(childs, 0, parent);
}

// export function loopAllChildren(childs, callback) {
//   const loop = (children, level) => {
//     React.Children.forEach(children, (item, index) => {
//       const pos = `${level}-${index}`;
//       if (item && item.props.children) {
//         loop(item.props.children, pos);
//       }
//       if (item) {
//         callback(item, index, pos, getValuePropValue(item));
//       }
//     });
//   };
//   loop(childs, 0);
// }

export function flatToHierarchy (arr) {
    if (!arr.length) {
        return arr;
    }
    const hierarchyNodes = [];
    const levelObj = {};
    arr.forEach((item) => {
        if (!item.pos) {
            return;
        }
        const posLen = item.pos.split('-').length;
        if (!levelObj[posLen]) {
            levelObj[posLen] = [];
        }
        levelObj[posLen].push(item);
    });
    const levelArr = Object.keys(levelObj).sort((a, b) => b - a);
    // const s = Date.now();
    // todo: there are performance issues!
    levelArr.reduce((pre, cur) => {
        if (cur && cur !== pre) {
            levelObj[pre].forEach((item) => {
                let haveParent = false;
                levelObj[cur].forEach((ii) => {
                    const $ii = ii;
                    if (isInclude($ii.pos.split('-'), item.pos.split('-'))) {
                        haveParent = true;
                        if (!$ii.children) {
                            $ii.children = [];
                        }
                        $ii.children.push(item);
                    }
                });
                if (!haveParent) {
                    hierarchyNodes.push(item);
                }
            });
        }
        return cur;
    });
    // console.log(Date.now() - s);
    return levelObj[levelArr[levelArr.length - 1]].concat(hierarchyNodes);
}


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
    const levelArr = Object.keys(levelObj).sort();
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
// console.log(filterParentPosition(
// ['0-2', '0-3-3', '0-10', '0-10-0', '0-0-1', '0-0', '0-1-1', '0-1']
// ));

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

// todo: do optimization.
export function handleCheckState (o, checkedPositionArr, checkIt) {
  // console.log(stripTail('0-101-000'));
  // let s = Date.now();
    const obj = o;
    let objKeys = Object.keys(obj);

    objKeys.forEach((i, index) => {
        const iArr = splitPosition(i);
        let saved = false;
        checkedPositionArr.forEach((_pos) => {
            const $posArr = splitPosition(_pos);
            if (iArr.length > $posArr.length && isInclude($posArr, iArr)) {
                obj[i].halfChecked = false;
                obj[i].checked = checkIt;
                objKeys[index] = null;
            }
            if (iArr[0] === $posArr[0] && iArr[1] === $posArr[1]) {
                saved = true;
            }
        });
        if (!saved) {
            objKeys[index] = null;
        }
    });
    objKeys = objKeys.filter(i => i); // filter non null;

    for (let pIndex = 0; pIndex < checkedPositionArr.length; pIndex++) {
        // loop to set ancestral nodes's `checked` or `halfChecked`
        const loop = (__pos) => {
            const $posLen = splitPosition(__pos).length;
            if ($posLen <= 2) { // e.g. '0-0', '0-1'
                return;
            }
            let sibling = 0;
            let siblingChecked = 0;
            const parentPosition = stripTail(__pos);
            objKeys.forEach((i /* , index*/) => {
                const iArr = splitPosition(i);
                if (iArr.length === $posLen && isInclude(splitPosition(parentPosition), iArr)) {
                    sibling += 1;
                    if (obj[i].checked) {
                        siblingChecked += 1;
                        const ii = checkedPositionArr.indexOf(i);
                        if (ii > -1) {
                            checkedPositionArr.splice(ii, 1);
                            if (ii <= pIndex) {
                                pIndex -= 1;
                            }
                        }
                    } else if (obj[i].halfChecked) {
                        siblingChecked += 0.5;
                    }
                // objKeys[index] = null;
                }
            });
        // objKeys = objKeys.filter(i => i); // filter non null;
            const parent = obj[parentPosition];
        // not check, checked, halfChecked
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

function getCheck (treeNodesStates, checkedPositions) {
    const halfCheckedKeys = [];
    const checkedKeys = [];
    const checkedNodes = [];
    Object.keys(treeNodesStates).forEach((item) => {
        const itemObj = treeNodesStates[item];
        if (itemObj.checked) {
            checkedKeys.push(itemObj.key);
        // checkedNodes.push(getValuePropValue(itemObj.node));
            checkedNodes.push({ ...itemObj, pos: item });
        } else if (itemObj.halfChecked) {
            halfCheckedKeys.push(itemObj.key);
        }
    });
    return {
        halfCheckedKeys, checkedKeys, checkedNodes, treeNodesStates, checkedPositions
    };
}

export function getTreeNodesStates (children, values) {
    const checkedPositions = [];
    const treeNodesStates = {};
    loopAllChildren(children, (item, index, pos, keyOrPos, siblingPosition) => {
        treeNodesStates[pos] = {
            node: item,
            key: keyOrPos,
            checked: false,
            halfChecked: false,
            siblingPosition
        };
        if (values.indexOf(getValuePropValue(item)) !== -1) {
            treeNodesStates[pos].checked = true;
            checkedPositions.push(pos);
        }
    });

    handleCheckState(treeNodesStates, filterParentPosition(checkedPositions.sort()), true);

    return getCheck(treeNodesStates, checkedPositions);
}

// can add extra prop to every node.
export function recursiveCloneChildren (children, cb = ch => ch) {
  // return React.Children.map(children, child => {
    return Array.from(children).map((child) => {
        const newChild = cb(child);
        if (newChild && newChild.props && newChild.props.children) {
            return React.cloneElement(newChild, {}, recursiveCloneChildren(newChild.props.children, cb));
        }
        return newChild;
    });
}
// const newChildren = recursiveCloneChildren(children, child => {
//   const extraProps = {};
//   if (child && child.type && child.type.xxx) {
//     extraProps._prop = true;
//     return React.cloneElement(child, extraProps);
//   }
//   return child;
// });


function recursiveGen (children, level = 0) {
    return React.Children.map(children, (child, index) => {
        const pos = `${level}-${index}`;
        const o = {
            title: child.props.title,
            label: child.props.label || child.props.title,
            value: child.props.value,
            key: child.key,
            $pos: pos
        };
        if (child.props.children) {
            o.children = recursiveGen(child.props.children, pos);
        }
        return o;
    });
}

function recursive (children, cb) {
    children.forEach((item) => {
        cb(item);
        if (item.children) {
            recursive(item.children, cb);
        }
    });
}

// Get the tree's checkedNodes (todo: can merge to the `handleCheckState` function)
// If one node checked, it's all children nodes checked.
// If sibling nodes all checked, the parent checked.
export function filterAllCheckedData (vs, treeNodes) {
    const vals = [...vs];
    if (!vals.length) {
        return vals;
    }

    const data = recursiveGen(treeNodes);
    const checkedNodesPositions = [];

    const checkChildren = (children) => {
        children.forEach(($item) => {
            const item = $item;
            if (item.$checked) {
                return;
            }
            const ci = vals.indexOf(item.value);
            const childs = item.children;
            if (ci > -1) {
                item.$checked = true;
                checkedNodesPositions.push({ node: item, pos: item.$pos });
                vals.splice(ci, 1);
                if (childs) {
                    recursive((_childs, $child) => {
                        const child = $child;
                        child.$checked = true;
                        checkedNodesPositions.push({ node: child, pos: child.$pos });
                    });
                }
            } else {
                childs && checkChildren(childs);
            }
        });
    };

    const checkParent = (children, $parent) => {
        let siblingChecked = 0;
        const parent = $parent || { root: true };
        children.forEach((item) => {
            const childs = item.children;
            if (childs && !item.$$checked && !item.$$halfChecked) {
                const p = checkParent(childs, item);
                if (p.$$checked) {
                    siblingChecked += 1;
                } else if (p.$$halfChecked) {
                    siblingChecked += 0.5;
                }
            } else if (item.$$checked) {
                siblingChecked += 1;
            } else if (item.$$halfChecked) {
                siblingChecked += 0.5;
            }
        });
        const len = children.length;
        if (siblingChecked === len) {
            parent.$$checked = true;
            checkedNodesPositions.push({ node: parent, pos: parent.$pos });
        } else if (siblingChecked < len && siblingChecked > 0) {
            parent.$$halfChecked = true;
        }
        if (parent.root) {
            return children;
        }
        return parent;
    };
    checkChildren(data);
    checkParent(data);

    checkedNodesPositions.forEach((i, index) => {
        // clear private metadata
        delete checkedNodesPositions[index].node.$$checked;
        delete checkedNodesPositions[index].node.$pos;
        // create the same structure of `onCheck`'s return.
        checkedNodesPositions[index].node.props = {
            title: checkedNodesPositions[index].node.title,
            label: checkedNodesPositions[index].node.label || checkedNodesPositions[index].node.title,
            value: checkedNodesPositions[index].node.value
        };
        if (checkedNodesPositions[index].node.children) {
            checkedNodesPositions[index].node.props.children = checkedNodesPositions[index].node.children;
        }
        delete checkedNodesPositions[index].node.title;
        delete checkedNodesPositions[index].node.label;
        delete checkedNodesPositions[index].node.value;
        delete checkedNodesPositions[index].node.children;
    });
    return checkedNodesPositions;
}

export function processSimpleTreeData (treeData, format) {
    const unflatten2 = ($array, $parent) => {
        const children = [];
        const array = $array;
        const parent = $parent || { [format.id]: format.rootPId };
        for (let i = 0; i < array.length; i++) {
            array[i] = { ...array[i] }; // copy, can not corrupts original data
            if (array[i][format.pId] === parent[format.id]) {
                array[i].key = array[i][format.id];
                children.push(array[i]);
                array.splice(i -= 1, 1);
            }
        }
        if (children.length) {
            parent.children = children;
            children.forEach(child => unflatten2(array, child));
        }
        if (parent[format.id] === format.rootPId) {
            return children;
        }
        return children;
    };
    return unflatten2(treeData);
}
