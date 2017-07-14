console.time('aaa');
// 输出全局变量 __filename 的值
console.log(__filename);

// 输出全局变量 __dirname 的值
console.log(__dirname);

// setTimeout(cb, ms) 全局函数在指定的毫秒(ms)数后执行指定函数(cb)。：setTimeout() 只执行一次指定函数
function printHello() {
	console.log('setTimeout...');
}
setTimeout(printHello, 1000);

// clearTimeout( t ) 全局函数用于停止一个之前通过 setTimeout() 创建的定时器
var timeout = setTimeout(printHello, 2000);
clearTimeout(timeout);

// setInterval() 方法会不停地调用函数，直到 clearInterval() 被调用或窗口被关闭
setInterval(printHello, 2000);

console.info('aaa');
console.error('aaa');
console.warn('aaa');
console.dir('aaa');
console.timeEnd('aaa');



