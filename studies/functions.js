/* 0. Functions: a set of statements that perform an action.
*Similar to variables, they must be declared with the 'Function' keyword and then defined with curly braces.
*They can also take parameters and perform actions with the parameters
*/

/*1. The two phases to using functions:
*First we must declare and define the function.
*Next we can execute or call a function by giving it a parameter.
*/

function add(num1, num2){ //this is declaring the function
return num1 + num2} //this is defining the function

add(3,2) //this is calling the function, it will return 5

/*2. What’s the difference between a function’s parameters and arguments PASSED to a function?
*parameters are the literal names listed in the function, such as num1 and num2 in the above scenario
*arguments are the actual values that are passed into the function, such as 3 and 2.
*parameters can be thought of as variables for the arguments
*/

/* 3. What’s the syntax for a NAMED function?
*/

function name(parameter1, parameter2, etc) {
	return parameter1, parameter2, etc}

/* 4. How do we assign a function to a variable?
* You can assign a function to a variable just like any other value
*/

function hello() {
	console.log('hello there')}
var greet = hello()
console.log(greet) //hello there

/* 5. Functions can OPTIONALLY take inputs, and OPTIONALLY return a single value. How do we specify inputs, and how do we specify outputs?
*the inputs can be specified by the parameters
*outputs can be specified with a method or a return
*return will immediately exit the function
*/

/* 6. Scope: Functions can see and modify variables in parent or global scopes. The inverse is NOT true.
*/

/* 7. Closures: Functions form closures around the data they house. If an object returned from the Function and is held in memory somewhere (referenced), that closure stays ALIVE, and data can continue to exist in these closures! (See: our meeting-room app for an example!)
*/