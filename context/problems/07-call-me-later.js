/***********************************************************************
Below we have provided a constructor function named 'CallCenter' that is 
initialized with a name property and has a sayHello method.

let judy = new CallCenter("Judy");
judy.sayHello(); // prints "Hello this is Judy"

You will be writing a method on the CallCenter's prototype that will be named 
callMeLater(time). The callMeLater method will intake a time in milliseconds 
and will invoke the `sayHello` method after the number of milliseconds has passed.

This can be accomplished using the global.setTimeout function to invoke the
sayHello function in `time` amount of milliseconds. Be warned though: using the
global.setTimeout will be setting the *context* of the function it invoked as the
global object. If you find yourself with the incorrect context when `sayHello`
is eventually invoked think about how you can ensure the context for sayHello will
always be the same.

Run the below examples until everything runs correctly!

Example 1:
let judy = new CallCenter("Judy");
judy.sayHello(); // prints "Hello this is Judy"
judy.callMeLater(1000); // waits one second then prints "Hello this is Judy"

Example 2:
let melan = new CallCenter("Melan");
melan.sayHello(); // prints "Hello this is Melan"
melan.callMeLater(1000); // waits one second then prints "Hello this is Melan"


***********************************************************************/

function CallCenter(name) {
	this.name = name;
}

CallCenter.prototype.sayHello = function() {
	console.log("Hello this is " + this.name);
}

CallCenter.prototype.callMeLater = function (ms) {
	setTimeout(this.sayHello.bind(this), ms);
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = CallCenter;
