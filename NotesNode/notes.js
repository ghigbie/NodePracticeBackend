console.log("Starting notes.js");
const fs = require("fs");


var fetchNotes = () => {
	try{
		var notesString = fs.readFileSync("notes-data.json");
		return JSON.parse(notesString);
	}catch (e){
		return [];
	}
};

var saveNotes = (notes) => {
	fs.writeFileSync("notes-data.json", JSON.stringify(notes));
};


var addNote = (title, body) => {
	var notes = fetchNotes();
	var note = {
		title,  //in Es6 we can remove the title: title syntax when both properties have the same name
		body
	};

	var duplicateNotes = notes.filter((note) => note.title === title);

	if(duplicateNotes.length === 0){
		notes.push(note);
		saveNotes(notes);
		return note;
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
	var notes = fetchNotes();// fetch notes
	var filteredNotes = notes.filter((note) => note.title !== title);// filter notes, removing the one with the title agr
	saveNotes(filteredNotes);// save new notes array

	return notes.length !== filteredNotes.length;
};
	



//this uses ES6 syntax to list out identical key value pairs in an object
module.exports = {
	addNote,
	getAll,
	getNote,
	removeNote
};
