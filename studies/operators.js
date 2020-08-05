
/*OPERATORS: These act on data or are used to compare values. There are several types of operators
*0. Assignment operators: = is an assignment operator and is used when we assign a value to a variable
*/

var x = 5

/*1. Arithmetic operators: there are 5 types of arithmetic operators
*/

console.log(1+1) //2
console.log(1-1) //0
console.log(1*1) //1
console.log(1/2) //0.5
console.log(3%2) //this modulo operator returns the remainder, which is 1 in this case.

/*2. Comparison operators: These compare two values and return a boolean value of true or false
*/

console.log(1>2) //false
console.log(1>=1) //true

//comparison operators additionally have strict comparison and non-strict comparison. Strict comparisons should be primarily used.

console.log (1===1) //true
console.log (1=="1") //true; ignores the type
console.log (1==="1") //false



/*3. Logical operators: There are 2 logical operators and they resolve to a boolean value of true or false
*/
//AND (&&) operator means both conditions must be true
console.log(1<2 && 1>2) //false
console.log(4>3 && 4>2) //true

//OR (||) operator means only one condition must be true 
console.log(1<2 || 1>2) //true
console.log(4>3 || 4>2) //true


/*4. Unary operators (!, typeOf, -): these take a single argument and perform an action
*/
//the bang (!) operator implies a "not" or opposite

console.log (1!==2)//true
console.log(1!=1) //false

//typeof will return a string which is the type of the operand
//if it returns object, it can refer to objects, arrays, null, or dates

typeof(3) //number
typeof("hello") //string

//(-) is negation, which converts non-number datatypes to numbers, in addition to giving it a negative value

-"3" //-3
-true //-1
-false //-0

/*5. Ternary operator (a ? b : c): this takes 3 operands and is formated by this (condition ? expression if true : expression if false)
*it can be thought of as a shortcut for if statements
*/

function feed(isCat) {
	return (isCat ? 'yes' : 'no')}

console.log(feed(true)) //yes
console.log(feed(false)) //no