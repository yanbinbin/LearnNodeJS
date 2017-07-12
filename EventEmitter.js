var events = require('events');
var eventEmitter = new events.EventEmitter();

// 创建监听器
var listener1 = function listener1(){
	console.log('listener1执行');
}
var listener2 = function listener2(){
	console.log('listener2执行');
}
var listener3 = function listener3(){
	console.log('listener3执行');
}

eventEmitter.on('connection', listener1);
eventEmitter.once('connection', listener2); // 只监听一次然后就会取消监听
eventEmitter.addListener('connection', listener3);

var eventListenerCount = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListenerCount + " 个监听器");

// 发射connection事件
eventEmitter.emit('connection');

// 移除监绑定的 listener1 函数
eventEmitter.removeListener('connection', listener1);
console.log("listener1 不再受监听。");
// 发射connection事件
eventEmitter.emit('connection');

var eventListenerCount = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListenerCount + " 个监听器");


// 处理error事件，如果注视下面的函数会抱异常
eventEmitter.on('error', function(err){
	console.log('接收到error事件');
});

console.log('发射error事件');
eventEmitter.emit('error');
console.log("程序执行完毕。");