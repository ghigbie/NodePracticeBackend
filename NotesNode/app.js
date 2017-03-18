console.log("Starting app.js");

//third-party and node modules
const fs = require("fs");
const _ = require("lodash");

//developer created files
const notes = require("./notes.js");


var command = process.argv[2];

if(command  === "add"){
	console.log("Adding new note");
}else if(command === "list"){
	console.log("Listing all notes");
}else{
	console.log("Command not recognized");
}