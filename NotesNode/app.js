console.log("Starting app.js");

const fs = require("fs");
const os = require("os");
const notes = require("./notes.js");

var res = notes.addNote();
console.log(res);

// let user = os.userInfo();

// fs.appendFile("greetings.txt", `Hello ${user.username}! You are ${notes.age}.`);


//fs.appendFile("greetings.txt", "Hello Word");

//for version 7.x.x of node
// fs. appendFile("greetings.txt", `Hello ${user.username}!`, function(err){
// 	if(err){
// 		console.log("Unable to write to file");
// 		console.log(err);
// 	}
// });