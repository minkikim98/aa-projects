/***********************************************************************
Below we've declared the Car constructor function that has a property 
representing speed. Write an instance method on the Car's prototype 
named `drive(newSpeed)`. This method should set the speed to the passed in 
argument, and then return the present speed.

**Hint**: Use the keyword *this*!

Examples:

let car = new Car();
car.drive(10); // => returns 10
console.log(car) // => {speed: 10, drive: ƒ}

car.drive(50); // => returns 50
console.log(car) // -> {speed: 50, drive: ƒ}

car.drive(100); // => returns 100
console.log(car) // -> {speed: 100, drive: ƒ}

***********************************************************************/

function Car() {
	this.speed = 0;
}

Car.prototype.drive = function (newSpeed) {
	this.speed = newSpeed;
	return newSpeed;
};

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = Car;