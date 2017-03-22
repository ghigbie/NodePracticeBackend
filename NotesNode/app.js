
//third-party and node modules
const fs = require("fs");
const _ = require("lodash");
const yargs = require("yargs");

//developer created files
const notes = require("./notes.js");  //the ./ is needed to show that is located on the same level
const titleOptions = {
	describe: "Title of a new note",
	demand: true,
	alias: "t"
};
const bodyOptions = {
	describe: "Text of a new note",
	demand: true,
	alias: "b"
};

const argv = yargs
	.command("add", "Add a new note", {
		title: titleOptions,
		body: bodyOptions
	})
	.command("list", "List all notes")
	.command("read", "Read a specific note", {
		title: titleOptions
	})
	.command("remove", "Delete a specific note", {
		title: titleOptions
	})
	.help()
	.argv;
var command = argv._[0];

// console.log("Command: ", command);
// console.log("Yargs", argv);

if(command  === "add"){
	var note = notes.addNote(argv.title, argv.body);
	if(note){
		console.log("==========================");
		console.log("Note successfully created!");
		notes.logNote(note);
	}else{
		console.log("===============================================================");
		console.log("A duplicate note was already in use. This node cannot be saved");
		console.log("===============================================================");
	}
}else if(command === "list"){
	var allNotes = notes.getAll();
	console.log(`Printing ${allNotes.length} note(s).`);
	allNotes.forEach((note) => notes.logNote(note));
}else if(command === "read"){
	var note = notes.getNote(argv.title, argv.body);
	if(note){
		console.log("========================");
		console.log("Note successfully found!");
		notes.logNote(note);
	}else{
		console.log("============================");
		console.log("This note does not exist : (");
		console.log("============================");
	}
}else if(command === "remove"){
	var noteRemoved = notes.removeNote(argv.title);
	var message = noteRemoved ? "Note was removed" : "Note not found";
	console.log("=========================");
	console.log(message);
	console.log("=========================");
}else{
	console.log("Command not recognized");
}