console.log("Starting notes.js");

var addNote = (title, body) => {
	console.log("Adding note: ", title, body);
};

var getAll = () =>{
	console.log("Getting all notes...");
};

var readNote = () => {
	console.log("YOu can now read ", title, body);
};

var removeNote = (title) =>{
	console.log("Removing note: ", title);
};


//this uses ES6 syntax to list out identical key value pairs in an object
module.exports = {
	addNote,
	getAll,
	readNote,
	removeNote
};
