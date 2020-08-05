/* 0. HOISTING: Certain declarations are moved to the very top of the code */

console.log(d);
var d = 10; //prints as undefined

//this is read as
var d //undefined
console.log(d) //undefined
var d= 10 //d is assigned 10

/*1. FUNCTIONS: Named functions are hoisted, but anonymouos functions are not. */
	function namedExample() {
	var b =10;
	return b;
}

console.log(namedExample());

//vs

console.log(namedExample());
	function namedExample() {
	var b =10;
	return b;
}

/*both will print out 10 because of hoisting*/
/*try to avoid hoisting within the browser because it will slow the browser
*this can be prevented by avoiding creating variables outside of functions and using anonymous functions*/

//function() { //this is an example of an unnamed function
	var b = 20
	return a;
//}

//how can we call this function though?
//we can assign a variable to it

var a = function() {
	var b = 20
	return a;
}
console.log(a());// will return the function and avoid hoisting


console.log(a())
var a = function () {
	var b = 20
	return b;
} //will throw a type error: a is not a function. It is not hoisted.