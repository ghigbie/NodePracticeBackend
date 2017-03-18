console.log("Starting App");

const fs = require("fs");

fs.appendFile("greetings.txt", "Hello Word");

//for version 7.x.x of node
fs. appendFile("greetings.txt", "Hello World", function(err){
	if(err){
		console.log("Unable to write to file");
		console.log(err);
	}
});