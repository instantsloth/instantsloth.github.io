// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
var contactObject = {}//create an object variable
contactObject.id = id; //create a key called id, and will assign the id input value
contactObject.nameFirst = nameFirst; //repeat with nameFirst and nameLast
contactObject.nameLast = nameLast

    return contactObject //return the object
} 

function makeContactList() { // Create a factory Function called makeContactList that returns an Object
    /*
     * You need something here to hold contacts. See length api for a hint:
     the contact-list object should have the following methods:
        length, addContact(contact), findContact(fullName), removeContact(contact), printAllContactNames
     */
    var contacts = []; // make this into an empty contacts array containing contact objects
    return { //start the object braces
        length: function() { // we implemented the length api for you //
            return contacts.length;  //returns the number of contacts within the contacts array
        }, //end the length function, comma means we move on to next key:value pair
        addContact: function addContact(contact) { //takes a contact object to be added to the contact-list.
            contacts.push(contact)
        }, //end this addContact function
        findContact: function findContact(fullName) { //takes a full-name String 
            for (var i = 0; i <=contacts.length-1; i++) { //loop through contacts
                var keyArray = Object.values(contacts[i]) //should return the keys of the object at that location into an array
                var fullNameConcat = `${keyArray[1]} ${keyArray[2]}`//creates a fullName to compare to the argument
                  if (fullNameConcat === fullName) {//if it's the same
                    return contacts[i] //returns the contact object if found in the contacts-list
                  } //close the if function
            } //closes loop for findContact function
         }, //closes findContact function
        removeContact: function removeContact(fullName) {//takes fullName OBJECT
            var fullNameArray = Object.values(fullName); //move the values into an array
            fullNameArray.shift(); //remove the ID value
           var fullNameString = fullNameArray.join(" ")
           // fullNameString = fullNameString.join(" ") //join the firstName and lastName
            for (var i = 0; i <=contacts.length-1; i++) { //loop through contacts
             var keyArray = Object.values(contacts[i]) //should return the keys of the object at that location into an array
             var fullNameConcat = `${keyArray[1]} ${keyArray[2]}`//creates a fullName to compare to the argument
                if (fullNameConcat === fullNameString) {//if it's the same
                    contacts.splice(i,1);//splice out 1 index at that position
                } //close the if function
            } //closes loop
            // console.log(keyArray.length)
            // console.log(fullName)
            // console.log(fullNameConcat)
            
         }, //closes findContact function
        printAllContactNames: function printAllContactNames() { //
  var allContactNames = []; //create a new array to hold all the stuff we want to print
  for (var i = 0; i <= contacts.length-1; i++) { //loop through each contact name
    var keyArray = Object.values(contacts[i])
    var fullNameConcat = `${keyArray[1]} ${keyArray[2]}`; //create a variable to store the fullname
    allContactNames.push(fullNameConcat);//push each contact into the array
  } //cloose the loop
    var allContactNamesString = allContactNames.join('\n'); //join each name with a linebreak
            //this should avoid a linebreak after the last contact and put it into a new variable to hold the string
            return allContactNamesString //return a String formated with all the full-names of the separated 
        } //closes printAllContactNames function
    } //closes the return
// YOUR CODE GOES ABOVE HERE //

}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}