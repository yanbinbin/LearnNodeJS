var util = require('util');

// util.inherits 是一个实现对象间原型继承的函数
// JavaScript 没有 提供对象继承的语言级别特性，而是通过原型复制来实现的
function Base() {
	this.name = 'base';
	this.base = 1991;
	this.sayHello = function() {
		console.log('Hello ' + this.name);
	}
}
Base.prototype.showName = function() {
	console.log('prototype->' + this.name);
}
function Sub() {
	this.name = 'Sub';
}
util.inherits(Sub, Base);
var objBase = new Base();
objBase.showName();
objBase.sayHello();
console.log(objBase);
var objSub = new Sub();
objSub.showName();
// objSub.sayHello();
console.log(objSub);


// util.inspectutil.inspect(object,[showHidden],[depth],[colors])是一个将任意对象转换 为字符串的方法，通常用于调试和错误输出。它至少接受一个参数 object，即要转换的对象。
// showHidden 是一个可选参数，如果值为 true，将会输出更多隐藏信息。
// depth 表示最大递归的层数，如果对象很复杂，你可以指定层数以控制输出信息的多少。如果不指定depth，默认会递归2层，指定为 null 表示将不限递归层数完整遍历对象。
// 如果color 值为 true，输出格式将会以ANSI 颜色编码，通常用于在终端显示更漂亮 的效果。
console.log(util.inspect(objBase));
console.log(util.inspect(objBase, true, null, true));