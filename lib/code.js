
import { isType } from './index.js';

export function isSimilarArray(arr1, arr2) {
    if(isType(arr1) !== '[Object Array]' || isType(arr2) !== '[Object Array]' || arr1.length !== arr2.length) {
        return false;
    }

    let arrTemp1 = [], arrTemp2 = [];
    for(let key in arr1) {
        arrTemp1.push(isType(arr1[key]))
        arrTemp2.push(isType(arr2[key]));
    }

    if(arrTemp1.sort().toString() === arrTemp2.sort().toString()){
        return true
    }else{
        return false;
    }
}


export function isSimilarArray2(arr1, arr2) {
    if( !(arr1 instanceof Array) || !(arr2 instanceof Array) ) return ; // 非数组

    if(arr1.length !== arr2.length) return; //两个数组不一样长

    const TYPES = ['number', 'string', 'boolean', 'undefined', 'null', 'window', 'date', 'object'];
    let arrTypesObj1 = {},
        arrTypesObj2 = {};
    const arrLen = arr1.length;
    const typeUtil = function(ele) {
        let r = '';
        if(r === null) {
            r = 'null'
        } else if(ele instanceof Array) {
            r = 'array';
        } else if(ele === window) {
            r = 'window';
        } else if(ele instanceof Date) {
            r = 'date';
        } else {
            r = typeof ele;
        }
        return r;
    }

    for(let i = 0; i < arrLen; i++) {
        let t1 = typeUtil(arr1[i]),
            t2 = typeUtil(arr2[i]);
        if(arrTypesObj1[t1]){
            arrTypesObj1[t1] += 1;
        }else {
            arrTypesObj1[t1] = 1;
        }

        if(arrTypesObj2[t2]) {
            arrTypesObj2[t2] += 1;
        } else {
            arrTypesObj2[t2] = 1;
        }
    }

    //判断每个数组的数据类型个数是否相同
    for(let j=0; j < TYPES.length; j++) {
        let curT = TYPES[j];
        if(arrTypesObj1[curT] !== arrTypesObj2[curT]){
            return false;
        }
    }

    return true;
}