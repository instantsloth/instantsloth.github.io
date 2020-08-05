/*
 * VARIABLES:
 *
 * 0. Variables are assigned values to hold, such as Number, String, Boolean, Array, Object or another data-type.
 *
 * 1. To create a variable we use the keyword, var, followed by a name for our
 * variable. By using var, the value of the variable can change and be reassigned throughout the program
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

/* VAR: Var can be declared anywhere, but it is FUNCTION (aka LOCAL) scoped, not BLOCK scoped. It can be accessed in the function
*(as opposed to let and const, which can only be accessed in blocks)
*/

/*
 * LET: Let is another way we can assign a value to a variable. It is similar to var since we can reassign values to it
but let cannot let you re-declare a variable! 
 */
 let schoolName = 'Ochsner' // -> Ochsner
 schoolName = 'UQ' //-> UQ
 
 var schoolPlace = 'New Orleans' // -> New Orleans
// let schoolPlace = 'Brisbane' // -> ERROR if you try to re-declare schoolPlace with let
 
/*Let is different from var in 2 ways:

1) Let limits declaration of the variable to the scope of a block statement or expression
Var will define it globally to the entire function.
*/
function letTest() {
  let x = 1; // x is assigned to 1 at the beginning of this function block
  {
    let x = 2;  // x is re-assigned to 2 in this sub-block of the function
    console.log(x);  // it will print 2
  } //once the sub-block is closed
  console.log(x);  // x remains assigned to 1
}

//2) Let is initialized only to a value when it is evaluated


function do_something() {
  console.log(bar); // undefined -> this has a placeholder value of 'undefined' because var is hoisted and will be defined later
  console.log(foo); // ReferenceError -> this will throw an error since let foo is NOT hoisted to the top
  var bar = 1; //when var bar is initialized, this will look back for a var bar to re-assign "1" to its value 
  let foo = 2  //when let foo is initialized, it will not look backwards and assign 2 to its value
}

/*
* CONST: Similar to let in the sense that it is also block scoped
* It is different in 1 way - it CANNOT be reassigned. This is good when initializing variables that you don't expect to change
*/

for (var i = 0; i<5; i++) {
    console.log(i)}

console.log(i) // -> 5


for (let i = 0; i<5; i++) {
console.log(i)}
console.log(i) //-> ERROR

//let can be helpful so you don't accidentally call a super huge number if you're looping a lot

const catName = 'Pepe';
//catName = 'Scampi' -> this will throw an error, you cannot RE-ASSIGN const
//var catName = 'Moosh-Moosh' -> this  will throw an error, you cannot RE-DECLARE const

/*
 * HOISTING:
Hoisting is how certain variable declarations and functions are moved to the top of a specific scope before the code is ran.
This is how you can call variables and functions before you've assigned them.
 */ 
console.log(x)
var x = 5

//but the program actually reads
var x
console.log (x) // -> undefined
var x= 5

//if var is declared within a function, it cannot be accessed outside of the function because it is only hoisted within the function

function doSomething(x) {
	var x = 5}
console.log(x) // -> undefined
