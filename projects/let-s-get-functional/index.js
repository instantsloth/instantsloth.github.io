// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("lowdown-instantsloth");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
//must use the filter function to filter out male customers
//output is a number
//element is customer
return _.filter(array, function(customer){
//don't need to include i and array since we only care about gender property of customer object
//test if customer object has a gender propert of male
	return customer.gender === 'male';
//don't include conditional statements into filter, it's already built in.
//.length will tell you the # of trues
}).length
};

var femaleCount = function(array) {
//must use the filter function to filter out male customers
//output is a number
//element is customer
return _.filter(array, function(customer){
//don't need to include i and array since we only care about gender property of customer object
//test if customer object has a gender propert of male
	return customer.gender === 'female';
//don't include conditional statements into filter, it's already built in.
//.length will tell you the # of trues
}).length
};

//return a string
var oldestCustomer = function(array) {
    let oldestName = 0; //set oldestName to 0 as a placeholder
    return _.reduce(array, function(prevObj, obj) { //reduce will compare prevObj and current obj
        if (obj.age > oldestName) { //during the first loop, there is no previous Obj, obj.age will be older than 0
            oldestName = obj.age; //set oldestName as obj.age
            return obj.name; //return the name associated with that obj
        } return prevObj; //if current OBJ isn't older than oldest, return the preObj
    });//close the if statement
}


var youngestCustomer = function(array) {
    let youngestName = Infinity; //set oldestName to largest valueas a placeholder
    return _.reduce(array, function(prevObj, obj) { //reduce will compare prevObj and current obj
        if (obj.age < youngestName) { //during the first loop, there is no previous Obj, obj.age will be younger than inifinity
            youngestName = obj.age; //assign youngestName as obj.age
            return obj.name; //return the name associated with that obj
            //next time the function runs, prevObj will disappear and obj will takes its place as prevObj
        } return prevObj; //if current OBJ isn't older than oldest, return the same preObj again as preObj next around
    });//close the if statement
}
function pluck2(collection, property){
     let returnArray = [];
     _.map(collection, function(value, index, collection){
         returnArray.push(collection[index][property]);
    })
    return returnArray
}
//should find average balance of customers and return a number


var averageBalance = function(array){
  let numberBalance = _.map(array, user => parseFloat(user.balance.replace(/[^\d.-]/g, '')));
 let average = _.reduce(numberBalance, (sum, currentValue) => {
    sum +=currentValue;
    return sum
 }, 0);
 return average / array.length;
};


var firstLetterCount;

var friendFirstLetterCount;

var friendsCount;

var topThreeTags;

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
