console.log("Starting notes.js");

module.exports.addNote = () => {
	console.log("addNote");
	return "New Note";
};

module.exports.addNumbers = (a, b) => {
	console.log("addNumbers called");
	return a+b;
};

