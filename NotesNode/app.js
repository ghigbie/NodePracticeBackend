console.log("Starting App");

const fs = require("fs");
const os = require("os");

let user = os.userInfo();

fs.appendFile("greetings.txt", `Hello ${user.username}!`);


//fs.appendFile("greetings.txt", "Hello Word");

//for version 7.x.x of node
// fs. appendFile("greetings.txt", `Hello ${user.username}!`, function(err){
// 	if(err){
// 		console.log("Unable to write to file");
// 		console.log(err);
// 	}
// });