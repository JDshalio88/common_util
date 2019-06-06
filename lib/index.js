export function type(data) {
    return data === 'null' ? '[Object Null]' : Object.prototype.toString.call(data); //
}

export function isType(data, type) {
    let tempTypeString = '';
    if(data === 'null'){
        tempTypeString = '[Object Null]';
    }else{
        tempTypeString = Object.prototype.toString.call(data);
    }

    return tempTypeString.slice(8, -1) === type;
}