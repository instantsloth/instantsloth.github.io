
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(number) {
let a = "#";
for (let i = 0; i < number; i++) {
console.log(a)
a+="#";}
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
for (let i = 1; i<=15; i++) {
  if (i%15===0) {
    console.log("fizzbuzz")
  } else if (i%3===0) {
    console.log('fizz')
  } else if (i%5===0) {
    console.log('buzz')
  } else {console.log(i)}
}
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//
function drawChessboard(number) {
let stringy = ""
for (var i =0; i<=number-1; i++) {// establish height
	if (i % 2 === 0) { //for even numbered rows
	for (var a = 0; a<=number-1; a++) {//each unit in that row
		if (a % 2 === 0) { //if that unit is even
		stringy += " "; //print space
		} else {
		stringy += "#"; //if odd, print #
		}
		}stringy += "\n"; //once the loop is over, newline
	} else { //for odd numbered rows
	for (var a = 0; a<=number-1; a++) {//each unit in that row
		if (a % 2 === 0) { //if that unit is even
		stringy += "#"; //print #
		} else {
		stringy += " "; //if odd, print space
		}
		}stringy += "\n"; //once the loop is over, newline
	}
}console.log(stringy)
  
}
////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
