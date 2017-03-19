console.log("Starting notes.js");
const fs = require("fs");

var addNote = (title, body) => {
	var notes = [];
	var note = {
		title,
		body
	};

	try{
		var notesString = fs.readFileSync("notes-data.json");
		notes = JSON.parse(notesString);
	}catch(err){
		console.log("There was a problem.");
		console.log(err);
	}

	notes.push(note);
	fs.writeFileSync("notes-data.json", JSON.stringify(notes));
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
