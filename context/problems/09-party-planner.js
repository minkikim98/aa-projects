/***********************************************************************
Declare a constructor function named PartyPlanner. A partyPlanner will
have a property named guestList that will point to an array. 

A partyPlanner will additionally have two instance methods:
1. throwParty() - which will return a different string depending on the number 
 guests on the guestList. 
  A. If there are no guests the returned string request more guests
  B. If there are guests on the guestList the returned sting will include those 
  guest's names.

2. addToGuestList(name) - will add a name to the party's guestList property


Closely look at the examples below for more information on each method:

Examples:
const party = new PartyPlanner();

console.log(party.throwParty()); // prints "gotta add people to the guest list"

party.addToGuestList("James");
console.log(party.throwParty()); // prints "Welcome to the party James"

party.addToGuestList("Alvin"); 
console.log(party.throwParty()); // prints "Welcome to the party James and Alvin"

Example 2:
const party2 = partyPlanner();
console.log(party2.throwParty()); // prints "gotta add people to the guest list"

party2.addToGuestList("Lucy");
console.log(party2.throwParty()); // prints "Welcome to the party Lucy"
***********************************************************************/

// your code here
function PartyPlanner() {
  this.guestList = [];
}

PartyPlanner.prototype.throwParty = function() {
  if (this.guestList.length === 0) return "gotta add people to the guest list";
  else return "Welcome to the party " + this.guestList.join(" and ");
}

PartyPlanner.prototype.addToGuestList = function(name) {
  this.guestList.push(name);
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = PartyPlanner;
} catch (e) {
  // catch the ref err
  module.exports = null;
}

