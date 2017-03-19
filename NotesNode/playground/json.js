// var obj = {
// 	name: "George",
// 	age: 34
// };

// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// console.log("=========================");

// var personString = '{"name": "George", "age": 38}';
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

const fs = require("fs");

var originalNote = {
	title: "Some title",
	body: "Some body"
};

var originalNoteString = JSON.stringify(originalNote);
console.log(typeof originalNoteString);
console.log(originalNoteString);
fs.writeFileSync("notes.json", originalNoteString);


console.log("===============================");

var noteString = fs.readFileSync("notes.json");ote
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);
