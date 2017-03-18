var obj = {
	name: "George"
};

var stringObj = JSON.stringify(obj);
console.log(typeof stringObj);
console.log(stringObj);

console.log("=========================");

var personString = '{"name": "George", "age": 38}';
var person = JSON.parse(personString);
console.log(typeof person);
console.log(person);
