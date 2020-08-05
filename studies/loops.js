/* 0. Loops: In order for a computer to repeat certain actions over again, a loop can be utilized. For example, searching through an array of strings can utilize a loop to search through each index.
*/

/*1. While: The while loop will loop through a block of code as long as the condition is true
*/

var count = 0
while (count<5) {
console.log(count);
count++
} //0, 1, 2, 3, 4

/*2. For: The for loop is similar to the while loop, and will also loop as long as the condition is true
*The for loop takes 3 parameters:
*for ([initialization];[condition];[increment])
* the loop is repeated until the condition becomes false
*/

for (var i = 5; i>0; i--) { 
//i starts at 5, and will decreased by 1 after each loop
//it will stop once it hits 0
console.log(i)} //5, 4, 3, 2, 1

var array = ['red','yellow','green']
for (var i = 0; i<=array.length; i++) {
	console.log(array[i])} //'red' 'yellow' 'green'

/*3. For-in loops: This is similar to a for loop, but is used for innumeral complex values, such as an object
*/

var object = {
	cat:'Pepe',
	dog:'Bandit'}
for (var key in object) {
	console.log(key)} //cat, dog