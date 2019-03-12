function MyFunction() {

}
MyFunction.prototype.bind = function (func, context) {
    var bindArg = [].slice.call(arguments,2);
    return function () {
        var funcArgs = [].slice.call(arguments);
        return func.apply(context,bindArg.concat(funcArgs))
    }
};

MyFunction.prototype.call = function () {
    
};
var obj = {
    a: "a"
};
var func = new MyFunction();