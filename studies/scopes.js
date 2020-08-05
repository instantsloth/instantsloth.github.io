/* 0. SCOPES: Scopes are where variables can be called and accessed. There are two types of scope: global scope and local scope */
/* 1. GLOBAL SCOPE: variables that are declared in the root of the file, outside of functions, have a global scope.
*Global scopes can be accessed in any other part of the code.*/

var number = 5;

function returnNumber() {
return number
} 

console.log(returnNumber()) // 5
console.log(number) //5

/* 2. LOCAL SCOPE: Variables that are defined inside a function are known as a local scope and only exists inside that function.
*They cannot be called outside of that function. */

function returnNumber() {
var number = 5;
return number;
}

console.log(returnNumber()) // 5
console.log(number) // reference error, number not defined

/* Benefits of local scopes include reducing space usage in the browser and being able to reuse variable names.*/
/* 4. FUNCTION SCOPE: Function scope type of local scope, which is limited and only accessible within the function's curly brackets, as seen as the example above*/

/* 5. BLOCK SCOPES: Block scopes are associated if-else statements and loop statements within the curly brackets.
*These variables ARE accessible outside of block scopes.
*This is because of HOISTING. */

if (1==1) {
	var a = 5;
}

console.log(a) // 5

/* 6. LET/ CONST: To get past this hoisting within block scopes, we can declare with LET/CONST instead to keep that variable to a local scope. */

if (1==1) {
	let b = 10;
}
console.log(b) // b is not defined      