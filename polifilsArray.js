function MyArray(array) {
    this.array = array;
}

MyArray.prototype.pop = function () {
    var lastElemArr = this.array[this.array.length -1];
    this.array.length = this.array.length -1;
    return lastElemArr;
};
MyArray.prototype.push = function (elem) {
    if (arguments.length > 2) {
        var elements = [];
        for (var i = 0; i < arguments.length;i++){
            elements[i] = arguments[i + 1];
        }
        elements.length = elements.length -1;
        for (var j = 0; j < elements.length; j++){
            this.array[this.array.length] = elements[j];
        }
    }else {
        this.array[length] = elem;
    }
};
MyArray.prototype.shift = function () {
    var firstElemArr = this.array[0];
    for (var i = 1;i < this.array.length; i++){
        this.array[i - 1] = this.array[i];
    }
    this.array.length = this.array.length -1;
    return firstElemArr;
};
MyArray.prototype.unshift = function ( elem) {
    for (var i = this.array.length; i > 0; i--) {
        this.array[i] = this.array[i-1];
    }
    this.array[0] = elem;
};
MyArray.prototype.map = function (callBackFun) {
    if (typeof callBackFun === "function") {
        var newArray = [];
        for (var i = 0; i < this.array.length; i++){
            newArray[i] = this.array[i];
        }
        for (var j = 0; j < this.array.length; j++){
            callBackFun(newArray[j]);
        }
    } else {
        console.error(callBackFun,'is not function');
    }
};
MyArray.prototype.forEach = function (callBackFun) {
    if (typeof callBackFun === "function") {
        for (var j = 0; j < this.array.length; j++){
            callBackFun(this.array[j]);
        }
    } else {
        console.error(callBackFun,'is not function');
    }
};
MyArray.prototype.filter = function (callBackFun) {
    if (typeof callBackFun === "function") {
        var filtredArray = [];
        for (var i = 0; i < this.array.length; i++){
            if (callBackFun(this.array[i])){
                filtredArray[filtredArray.length] = this.array[i];
            }
        }
        return filtredArray;
    } else {
        console.error(callBackFun,'is not function');
    }
};
MyArray.prototype.reverse = function () {
    var reversedArray = [];
    for (var i = this.array.length - 1; i >= 0; i--){
        reversedArray[reversedArray.length] = this.array[i];
    }
    this.array = reversedArray;
};
MyArray.prototype.join = function (joiner) {
    var joinedString = '';
    if(!arguments.length){
        for (var i = 0; i < this.array.length; i++){
            if (this.array[i] === this.array.length){
                joinedString = joinedString + this.array[i];
            } else {
                joinedString = joinedString + this.array[i] + ',';
            }
        }
    } else {
        for (var i = 0; i < this.array.length; i++){
            if (this.array[i] === this.array.length){
                joinedString = joinedString + this.array[i];
            } else {
                joinedString = joinedString + this.array[i] + joiner;
            }
        }
    }
    console.log(joinedString);
};
MyArray.prototype.reduce = function (callBackFun) {
    var middleSum = 0;
    if (typeof callBackFun === "function") {
        for (var i = 0; i < this.array.length; i++){
           middleSum = callBackFun(middleSum,this.array[i]);
        }
        console.log(middleSum);
    } else {
        console.error(callBackFun,'is not function');
    }
};
MyArray.prototype.sort = function (callBackFun) {
    if (!arguments.length){
        for (let i = 0; i < this.array.length; i++) {
            for (let j = 0; j < this.array.length - i; j++) {
                console.log(String(this.array[j]) > String(this.array[j+1]));
                if (String(this.array[j]) > String(this.array[j+1])){
                    var buffer = this.array[j];
                    this.array[j] = this.array[j + 1];
                    this.array[j + 1] = buffer;

                }
            }
        }
    }else {
        for (let i = 0; i < this.array.length; i++) {
            for (let j = 0; j < this.array.length - i; j++) {
                var buffer = '';
                switch (callBackFun(this.array[j],this.array[j+1])) {
                    case 1 :
                        buffer = this.array[j];
                        this.array[j] = this.array[j + 1];
                        this.array[j + 1] = buffer;
                        break;
                    case -1:
                        buffer = this.array[j +1];
                        this.array[j + 1] = this.array[j];
                        this.array[j]  = buffer;
                        break;
                    case 0:
                        break;

                }
            }
        }
    }
};
MyArray.prototype.some = function (callBackFun) {
    for (var i = 0; i < this.array.length; i++){
        if (callBackFun(this.array[i])){
            return true;
            break;
        }else {
            return false;
        }
    }
};
MyArray.prototype.every = function (callBackFun) {
    for (var i = 0; i < this.array.length; i++) {
        if (!callBackFun(this.array[i])) {
            return false;
            break;
        } else {
            return true;
        }
    }
};
var array = new MyArray([2,1,4,3,5]);


