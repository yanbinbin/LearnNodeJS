
var fs = require("fs");

// 读入流
var data = '';

var readStream = fs.createReadStream('input.txt');
// readStream.setEncoding('utf-8');

// readStream.on('data', function(chunk){
// 	data += chunk;
// 	console.log("收到data事件，chunk = " + chunk);
// })

// readStream.on('end', function(){
// 	console.log("收到end事件，data = " + data);	
// })

// readStream.on('error', function(err){
// 	console.log(err.stack);
// })

// 写入流
var outData = 'Hello NodeJS';
var writeStream = fs.createWriteStream('output.txt');
// writeStream.write(outData, 'UTF-8');
// // 标记文件末尾
// writeStream.end();

// writeStream.on('finish', function(){
// 	console.log('写入完成');
// });

// writeStream.on('error', function(err){
// 	console.log(err.stack);
// })


// 管道流
// readStream.pipe(writeStream);


// 链式流
var zlib = require("zlib");
// 压缩 input.txt 文件为 input.gz
// readStream
// 		.pipe(zlib.createGzip())
// 		.pipe(fs.createWriteStream('input.gz'))
// 解压 input.gz 文件为 input2.txt
fs.createReadStream('input.gz')
		.pipe(zlib.createGunzip())
		.pipe(fs.createWriteStream('text.txt'))
console.log("程序执行完毕");





