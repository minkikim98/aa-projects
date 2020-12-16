/*******************************************************************************
Write a function `minValueCallback` that accepts an array and an optional callback as arguments.
If a callback is not passed in, then the function should return the smallest
value in the array. If a callback is passed in, then the function should return
the result of the smallest value being passed into the given callback.

Examples:
console.log(minValueCallback([64, 25, 49, 9, 100]));             // 9
console.log(minValueCallback([64, 25, 49, 9, 100], Math.sqrt));  // 3

*******************************************************************************/

let minValueCallback = (arr, cb) => {
    let min = null;
    arr.forEach(curr => {
        if (cb === undefined) {
            // console.log(min);
            if (min === null || curr < min) min = curr;
        } else {
            if (min === null || cb(curr) < min) min = cb(curr);
        }
    });
    return min;
};




// minValueCallback([64, 25, 49, 9, 100]);

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = minValueCallback;
