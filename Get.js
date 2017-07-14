var http = require('http');
var url = require('url');
var util = require('util');

http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type' : 'text/plain; charset=utf-8'});

	// res.end(util.inspect(url.parse(req.url, true)));

	// 解析url参数
	var params = url.parse(req.url, true).query;
	res.write("name = " + params.name);
	res.write("\n");
	res.write("password = " + params.password);
	res.end();
}).listen(8888);