/**
* DATATYPES:
*
* 0. There are 2 types of data in Javascript: primitive and complex
*
* Primitive includes: Number, String, Boolean, NaN, undefined, and null
*Primitive data types hold 1 value, and are immutable( basically functions and operations on simple values will return new values instead of changing them)
* Compelx includes: Object, Array, Function
* Complex datatypes hold and collect values and can be of any size.
*
*1. Number: A number is numerical data, and arithemetic operations can be performed on them. They return a number after it is resolved.
*/

console.log(typeof(3 % 2)) //-> number
/*
*2. String: Strings are enclosed in single or double quotes and have character data. They are similar to an array of characters and can be accessed like so:
*/
var name = 'Monica';
console.log(name[2]) //prints "o"
/*
* strings can also be concatenated with the + operator
*/
console.log(name + " Liu") //prints "Monica Liu"
/*
* 3. Boolean: Either true or false; it is returned when a statement is evaluated
*/
console.log(3>2) // -> true
console.log(2>3) //-> false
/*
*4. Array: A collection of values which have a specific order. The order is numbered via an index which starts at 0. It is declared with a set of brackets
*/
var array = ['hello',true,3]
console.log(array[2]) //-> prints 3
/*arrays can be manipulated with methods, such as push, pop, shift, unshift, splice, and slice.
*/
array.shift('yes') //will add a 'yes' to end of array
array.unshift('no') //will add a 'no' to beginning of array
/*
*5. Object: Objects are also a collection of data, but do not have a specific order and therefore cannot be accessed with an index number.
*Objects are collections of key:value pairs, and the name of the key is required to access its value pair.
*They are declared with curly braces. Each key:value pair can be accessed with bracket or dot notation.
*/

var object = {
	name: 'Monica',
	city: 'New Orleans',
	hasPets: true }

console.log(object.name) //-> Monica
console.log(object['name'])// -> Monica

/* Methods on an array will usually not work on objects, since there is no specific order index. Items can be added by simply declaring a new key and assigning it a new value
*/
object.age = 28 //this will add an Age:28 key value pair to object.
/*
*6. Function: a set of statements that perform an action. Similar to variables, they must be declared wit the 'Function' keyword and then defined with curly braces.
*They can also take parameters and perform actions with the parameters
*/

function add(parameter1, parameter2) {
	return parameter1 + parameter2}

add(1,3) //->4

/*functions can also be anonymous and written as a function expression*/

var add = function(parameter1, parameter2) {
	return parameter1 + parameter2}
add(1,3) //->4

/*remember that variables defined within a function can only be accessed within that function scope.
*on the flip side, a function has full access to the global scope
*/
/* 7. undefined: this is a value assigned to variables that have been declared, but not defined or assigned to a value
*/
var x;
console.log(x) //-> undefined

/* 8. null: this is the absence of a value or identification. Null represents something that is known to exist but has no type or value, whereas undefined has never been defined or initialized.
*null can be interpreted as false in a sense
*/

null == undefined //true
null === undefined //false
!null //true

/* 9. NaN: this is a value that represents not-a-number
*/
function isNumber(x) {
	if (isNaN(x)) {
	return NaN;
} return x; }

isNumber(3) // 3
isNumber('hello') //NaN

/* 10. Infinity and -Infinity: Infinity can be thought of as a positive number greater than any other number.
*-Infinity can be thought of as a number less than any other number.
*Note that unlike most things in Javascript, the first letter is capitalized
*/

console.log(Infinity>1) //true
console.log(-Infinity>1) //false