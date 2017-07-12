var fs = require('fs');

// 同步调用
// var data = fs.readFileSync('input.txt');
// console.log(data.toString());

// 回调异步执行
fs.readFile('input.txt', function(err, data) {
	if (err) {
		return console.log(err);
	}
	console.log(data.toString());
});

console.log("程序执行结束！");