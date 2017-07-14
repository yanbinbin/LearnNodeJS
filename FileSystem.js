var fs = require("fs");
var util = require("util");

// 异步读取
// fs.readFile('input.txt', function(err, data){
// 	if (err) {
// 		console.log(err);
// 	}
// 	console.log('异步读取：' + data.toString());
// });

// 同步读取
// console.time();
// var data = fs.readFileSync('input.txt');
// console.log('同步读取：' + data);
// console.timeEnd();

// 异步打开文件
// console.log('准备打开文件');
// fs.open('input.txt', 'r+', function(err, fd){
// 	if (err) {
// 		console.error(err);
// 	}
// 	console.log("文件打开成功");
// 	util.inspect(fd, true, null, true);
// })

// 获取文件信息
// fs.stat('input.txt', function(err, stats){
// 	console.log(stats);
// 	console.log(stats.isFile());
// 	console.log(stats.isDirectory());
// 	console.log(stats.isBlockDevice());
// })

// 写入文件
// fs.writeFile('input.txt', "这是新写入的内容1", 'utf-8', 'a', function(err){
// 	if (err) {
// 		console.error(err);
// 	}
// 	console.log("数据写入成功！");
// 	fs.readFile('input.txt', function(err, data){
// 		if (err) {
// 			console.error(err);
// 		}
// 		console.log('file content : ' + data.toString());
// 	})
// })

// 读取文件
// var buf = new Buffer(1024);
// console.log('will read file soon');
// fs.open('input.txt', 'r+', function(err, fd){
// 	if (err) {
// 		console.error(err);
// 	}
// 	console.log("文件打开成功！");
// 	console.log("准备读取文件：");
// 	fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
// 		if (err){
//          	console.log(err);
//       	}
//       	console.log(bytes + "  字节被读取");
//      	// 仅输出读取的字节
//       	if(bytes > 0){
//          	console.log(buf.slice(0, bytes).toString());
//       	}

//       	// // 关闭文件
//       	fs.close(fd, function(err){
//       		if (err){
//          		console.log(err);
//       		}
//       		console.log('file has been closed');
//       	});
// 	});
// });

// 删除文件
fs.unlink('input.txt', function(err){
	if (err) {
		console.error(err);
	}
	console.info('file unlinked successed');
})