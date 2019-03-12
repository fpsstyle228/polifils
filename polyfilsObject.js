function MyObject() {

}

MyObject.prototype.create = function (proto,propertiesObject) {
    'use strict';
    if (typeof proto !== "object") throw new TypeError();
    var obj = {};
    obj.prototype = proto;
    if (propertiesObject !== undefined) Object.defineProperties(obj,propertiesObject);
    return obj;
};
MyObject.prototype.keys = function (obj) {
    if (obj !== Object(obj)) throw new TypeError('not object');
    var keysArray=[],p;
    for (p in obj) if (Object.prototype.hasOwnProperty.call(obj,p)) keysArray.push(p);
    return keysArray;
};
MyObject.prototype.freeze =function (obj) {
for(prop in obj){
    Object.defineProperty(obj,prop,{
        value: obj[prop],
        writable: false,
        configurable: false
    })
}
};

var obj = new MyObject();