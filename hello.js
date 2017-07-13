// exports.world = function(){
// 	console.log("Hello NodeJS");
// }

function Hello() {
	var name;
	this.setName = function(pName){
		name = pName;
	}
	this.sayHello = function(){
		console.log('Hello ' + name);
	}
}

module.exports = Hello;