// 函数引用传递
function say(word){
	console.log(word);
}

function execute(someFunc, value){
	someFunc(value);
}

execute(say, "hello");


// 匿名函数
execute(function(word){
	console.log(word);
}, "匿名函数")