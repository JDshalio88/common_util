
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