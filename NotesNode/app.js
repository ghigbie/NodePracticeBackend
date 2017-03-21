console.log("Starting app.js");

//third-party and node modules
const fs = require("fs");
const _ = require("lodash");
const yargs = require("yargs");

//developer created files
const notes = require("./notes.js");  //the ./ is needed to show that is located on the same level

const argv = yargs.argv;
var command = argv._[0];

console.log("Command: ", command);
console.log("Yargs", argv);

if(command  === "add"){
	var note = notes.addNote(argv.title, argv.body);
	if(note){
		console.log("==========================");
		console.log("Note successfully created!");
		console.log(`Title: ${note.title}`);
		console.log(`Body: ${note.body}`);
		console.log("==========================");
	}else{
		console.log("===============================================================");
		console.log("A duplicate note was already in use. This node cannot be saved");
		console.log("===============================================================");
	}
}else if(command === "list"){
	notes.getAll();
}else if(command === "read"){
	notes.getNote(argv.title);
}else if(command === "remove"){
	notes.removeNote(argv.title);
	var message = noteRemoved = notes.removeNote(argv.title);
	console.log("=========================");
	console.log(`${message} was removed`);
	console.log("=========================");
}else{
	console.log("Command not recognized");
}