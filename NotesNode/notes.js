console.log("Starting notes.js");
const fs = require("fs");


var fetchNotoes = () => {
	try{
		var notesString = fs.readFileSync("notes-data.json");
		return JSON.parse(notesString);
	}catch (e){
		return [];
	}
};

var saveNotes = (notes) => {
	fs.writeFileSync("notes-data.json", JSON.stringify(ndotes));
};

var addNote = (title, body) => {
	var notes = fetchNotes();
	var note = {
		title,
		body
	};

	var duplicateNotes = notes.filter((note) => note.title === title);

	if(duplicateNotes.length === 0){
		notes.push(note);
		saveNotes(notes);
	}else{
		console.log("===================================================");
		console.log("A duplicate note was found. Message cannot be saved");
		console.log("===================================================");
	}
	
};

var getAll = () =>{
	console.log("Getting all notes...");
};

var getNote = (title) => {
	console.log("Getting note...", title, body);
};

var removeNote = (title) =>{
	console.log("Removing note: ", title);
};


//this uses ES6 syntax to list out identical key value pairs in an object
module.exports = {
	addNote,
	getAll,
	getNote,
	removeNote
};
