/***********************************************************************
Below we've declared a Calculator constructor function that has a property
representing the total - which is initialized to 0. This time around we'll
make our calculator a bit fancier! Let's first add some new functionality.

Write two methods on the Calculator's prototype named:
1. modulo(num) - sets the total to the remainder of division with the arg number
2. squared() - multiplies the total by its self

Each of the above methods should return the total.

Example:
let fancyCalculator = new FancyCalculator();
fancyCalculator.setTotal(5) // => returns 5
fancyCalculator.squared() // => returns 25
fancyCalculator.modulo(4) // => returns 1
fancyCalculator.total // => returns 1
***********************************************************************/

function FancyCalculator() {
	this.total = 0;
}

FancyCalculator.prototype.setTotal = function(num) {
	this.total = num;
	return this.total;
}

FancyCalculator.prototype.modulo = function (num) {

	this.total %= num;
	return this.total;
}

FancyCalculator.prototype.squared = function (num) {
	this.total = this.total * this.total;
	return this.total;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = FancyCalculator;
