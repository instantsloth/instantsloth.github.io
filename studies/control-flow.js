/* 0. Control flow: We can direct the path a function can take by using if, else if, and if statements.
*/

/*1. If: If statements will only carry out the block of code if the condition is true*/
if(true) {console.log('yes') //yes

/* Else If: Else if statements will only carry out if the previous if condition is false and the else if condition is true */

if(false) {console.log('yes')}
else if(true) {console.log('no')} //will print no

/*3. Else: Else carries out a catch-all default block of code if all statements previously are false. There are no conditions required.
*/

if(false) {console.log('yes')}
else if(false) {console.log('no')}
else {console.log('maybe')} //will print maybe

/*4. Switch: A switch statement can select one of block of code out of a group of code blocks to be carried out
*/

function number(num1) {
	var answer = "";
switch(num1) {
	case 1:
	answer = 'one';
	break;
	case 2:
	answer = 'two';
	break}
	return answer;
}
}
number(1) // will print one