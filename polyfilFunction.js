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


function func1(b) {
    // console.log(this.a + b);
}
Function.prototype.apply2 = function (context, funcArguments){
    var func = this;
    var funcArguments = [].slice.call(arguments,1);
    context.bindedFucntion = func;
    context.bindedFucntion(funcArguments);
    delete context.bindedFucntion;
};
Function.prototype.bind2 = function (context) {
    var func = this;
    var bindArg = [].slice.call(arguments,1);
    return function () {
        var funcArgs = [].slice.call(arguments);
        return func.apply2(context,bindArg.concat(funcArgs))
    }
};
Function.prototype.call2 = function (context) {
    var func = this;
    var funcArguments = [].slice.call(arguments,1);
    context.bindedFucntion = func;
    context.bindedFucntion(funcArguments);
    delete context.bindedFucntion;
}
var obj = {
    a: 1
};
func1.apply2(obj,[3]);
// func1.bind2(obj)();
var func = new MyFunction();

var funcArguments = [1,2,3,4];
function spreadOperator(func,value) {
    for (var i = 0; i < value.length; i++) {
        // var p = func.arguments[i] = value[i];
        // console.log(p);
        var p = func.apply(null,value);
        console.log(p);
    }
    // func();
}
// f(1,2,3,4);
function f(a,b,c,d) {
    console.log(a-b+c+d);
}
spreadOperator(f,funcArguments);