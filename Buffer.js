// 创建Buffer的三种方法
var buf1 = new Buffer(10);
var buf2 = new Buffer([1,2,3,4,5]);
var buf3 = new Buffer("Hello NodeJS", "utf-8");

console.log("buf1 = " + buf1);
console.log("buf2 = " + buf2);
console.log("buf3 = " + buf3);

var buf4 = new Buffer(100);
buf4.write("Hello", 0, 2);
console.log("buf4 = " + buf4.toString('utf-8'));

var buf5 = new Buffer(100);
var json = buf5.toJSON(buf5);
console.log("buf5 = " + buf5);

var buf6 = Buffer.concat([buf4, buf5]);
console.log("buf6 = " + buf6);

var buf7 = new Buffer("a");
var buf8 = new Buffer("B");
var result = buf7.compare(buf8);
if(result < 0) {
   console.log(buf7 + " 在 " + buf8 + "之前");
}else if(result == 0){
   console.log(buf7 + " 与 " + buf8 + "相同");
}else {
   console.log(buf7 + " 在 " + buf8 + "之后");
}


var buf9 = new Buffer("ABC");
var buf10 = new Buffer(3);
buf9.copy(buf10);
console.log("buffer10 content: " + buf10.toString());


var buf11 = new Buffer("abc");
console.log("buffer11 length = " + buf11.length);


var buf12 = new Buffer("abcde");
var buf13 = buf12.slice(0, 3);
console.log("buf13 content: " + buf13.toString());