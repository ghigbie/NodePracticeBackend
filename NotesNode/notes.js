console.log("Starting notes.js");

var addNote = (title, body) => {
	console.log("Adding note: ", title, body);
};

var getAll = () =>{
	console.log("Getting all notes...");
};

//this uses ES6 syntax to list out identical key value pairs in an object
module.exports = {
	addNote,
	getAll
};
