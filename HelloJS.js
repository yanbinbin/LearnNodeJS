var http = require('http');

http.createServer(function(request, responce) {
	// 发送HTTP头部；状态码：200，ok；内容类型：text／plain
	responce.writeHead(200, {'Content-Type':'text/plain'});

	// 发送响应数据
	responce.end("Hello NodeJS");
}).listen(8888);