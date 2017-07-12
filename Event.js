// 引入events模块
var events = require('events');

// 创建eventEmitter对象
var eventEmitter = new events.EventEmitter();

// 创建事件处理程序
var connectHandler = function connected() {
	console.log('连接成功');

	// 发送data_receive事件
	console.log('发射data_receive事件');
	eventEmitter.emit('data_receive');
};

// 绑定connect事件处理程序
eventEmitter.on('connect', connectHandler);

// 使用匿名函数绑定data_receive事件处理程序
eventEmitter.on('data_receive', function(){
	console.log('接收到data_receive事件');
})

// 移除监听器
eventEmitter.removeListener('connect', connectHandler);

// 发射connect事件
console.log('发射connect事件');
eventEmitter.emit('connect');


// 发射事件带参数
eventEmitter.on('someEvent', function(arg1, arg2){
	console.log('listener1', arg1, arg2);
})
eventEmitter.on('someEvent', function(arg1, arg2){
	console.log('listener2', arg1, arg2);
})
eventEmitter.emit('someEvent', '参数1', 'arg2');

console.log("程序执行完毕。");