// const arr = [1, 2, 3, null, undefined, 4, 5];
// const newArray = arr.filter(a => a);
// console.log(newArray); // output: [ 1, 2, 3, 4, 5 ]

//##############################################################################

// Method 1: Array.prototype.reduceRight()
// const arr = [0, 1, 2, 3, 4];
// const sum = arr.reduceRight((accumulator, currentValue, currentIndex) => {
//     console.log('accumulator: ', accumulator, ', currentValue: ', currentValue, ', currentIndex: ', currentIndex);
//     return accumulator + currentValue;
// })
// console.log('sum: ', sum);
// OUTPUT: 
// accumulator:  4 , currentValue:  3 , currentIndex:  3
// accumulator:  7 , currentValue:  2 , currentIndex:  2
// accumulator:  9 , currentValue:  1 , currentIndex:  1
// accumulator:  10 , currentValue:  0 , currentIndex:  0
// sum:  10

// -----------
// const arr = [0, 1, 2, 3, 4];
// const sum = arr.reduceRight((accumulator, currentValue, currentIndex) => {
//     console.log('accumulator: ', accumulator, ', currentValue: ', currentValue, ', currentIndex: ', currentIndex);
//     return accumulator + currentValue;
// }, 10)
// console.log('sum: ', sum);
// OUTPUT: 
// accumulator:  10 , currentValue:  4 , currentIndex:  4
// accumulator:  14 , currentValue:  3 , currentIndex:  3
// accumulator:  17 , currentValue:  2 , currentIndex:  2
// accumulator:  19 , currentValue:  1 , currentIndex:  1
// accumulator:  20 , currentValue:  0 , currentIndex:  0
// sum:  20

//-------------
// NOTE- If the array is empty and no initial value is provided, TypeError would be thrown.
// const arr = [];
// const sum = arr.reduceRight((acc, currValue, currIndex) => {
//     console.log('accumulator: ', acc, ', currentValue: ', currValue, ', currentIndex: ', currIndex);
//     return acc + currValue;
// });
// console.log('sum: ', sum);
// OUTPUT: 
// TypeError: Reduce of empty array with no initial value

//------------
// NOTE- If the initial value is provided but the array is empty.
// The value will be return with calling the callbackFn.
// const arr = [];
// const sum = arr.reduceRight((acc, currValue, currIndex) => {
//     console.log('accumulator: ', acc, ', currentValue: ', currValue, ', currentIndex: ', currIndex);
//     return acc + currValue;
// }, -1);
// console.log('sum: ', sum);
// OUTPUT: sum: -1

//-------------
// #NOTE- If the array has only one element and no initial value is provided.
// That one value will be returned without calling callbackFn.
// const arr = [1];
// const sum = arr.reduceRight((acc, currValue, currIndex) => {
//     console.log('accumulator: ', acc, ', currentValue: ', currValue, ', currentIndex: ', currIndex);
//     return acc + currValue;
// });
// console.log('sum: ', sum);
// OUTPUT: sum: 1

//---------------
// const arr = [1];
// const sum = arr.reduceRight((acc, currValue, currIndex) => {
//     console.log('accumulator: ', acc, ', currentValue: ', currValue, ', currentIndex: ', currIndex);
//     return acc + currValue;
// }, 2);
// console.log('sum: ', sum);
// OUTPUT: 
// accumulator:  2 , currentValue:  1 , currentIndex:  0
// sum:  3

//----------------
// const arr = [0, 1, ,2, undefined, null, 3, 4];
// const sum = arr.filter(a => a).reduceRight((acc, curr) => acc + curr);
// console.log('sum: ', sum);


//################################################################################

// METHOD 2: Array.prototype.reduce()

// const arr = [1, 2, 3, 4, 5];
// const sum = arr.reduce((acc, currValue, currIndex) => {
//     console.log('accumulator: ', acc, ', currentValue: ', currValue, ', currentIndex: ', currIndex, ', return: ', (acc + currValue));
//     return acc + currValue;
// });
// console.log('sum: ', sum);
// OUTPUT: 
// accumulator:  1 , currentValue:  2 , currentIndex:  1 , return:  3
// accumulator:  3 , currentValue:  3 , currentIndex:  2 , return:  6
// accumulator:  6 , currentValue:  4 , currentIndex:  3 , return:  10
// accumulator:  10 , currentValue:  5 , currentIndex:  4 , return:  15
// sum:  15

//--------------------

// const arr = [1, 2, 3, 4, 5];
// const sum = arr.reduce((acc, currValue, currIndex) => {
//     console.log('accumulator: ', acc, ', currentValue: ', currValue, ', currentIndex: ', currIndex, ', return: ', (acc + currValue));
//     return acc + currValue;
// }, 0);
// console.log('sum: ', sum);
// OUTPUT: 
// accumulator:  0 , currentValue:  1 , currentIndex:  0 , return:  1
// accumulator:  1 , currentValue:  2 , currentIndex:  1 , return:  3
// accumulator:  3 , currentValue:  3 , currentIndex:  2 , return:  6
// accumulator:  6 , currentValue:  4 , currentIndex:  3 , return:  10
// accumulator:  10 , currentValue:  5 , currentIndex:  4 , return:  15
// sum:  15

//---------------------

// const arr = [];
// const sum = arr.reduce((acc, currValue, currIndex) => {
//     console.log('accumulator: ', acc, ', currentValue: ', currValue, ', currentIndex: ', currIndex, ', return: ', (acc + currValue));
//     return acc + currValue;
// });
// console.log('sum: ', sum);
// OUTPUT:
// TypeError: Reduce of empty array with no initial value
// #NOTE- CallbackFn not called!! Only value is returned.

//---------------------

// const arr = [];
// const sum = arr.reduce((acc, currValue, currIndex) => {
//     console.log('accumulator: ', acc, ', currentValue: ', currValue, ', currentIndex: ', currIndex, ', return: ', (acc + currValue));
//     return acc + currValue;
// }, 1);
// console.log('sum: ', sum);
// OUTPUT: 
// sum: 1
// #NOTE- CallbackFn not called!! Only value is returned.

//---------------------

// const arr = [1];
// const sum = arr.reduce((acc, currValue, currIndex) => {
//     console.log('accumulator: ', acc, ', currentValue: ', currValue, ', currentIndex: ', currIndex, ', return: ', (acc + currValue));
//     return acc + currValue;
// });
// console.log('sum: ', sum);
// OUTPUT: 
// sum: 1
// #NOTE- callbackFn not called! Only value is returned.

//---------------------

// const arr = [1];
// const sum = arr.reduce((acc, currValue, currIndex) => {
//     console.log('accumulator: ', acc, ', currentValue: ', currValue, ', currentIndex: ', currIndex, ', return: ', (acc + currValue));
//     return acc + currValue;
// }, 0);
// console.log('sum: ', sum);
// OUTPUT: 
// accumulator:  0 , currentValue:  1 , currentIndex:  0 , return:  1
// sum:  1


//####################################################################################

// METHOD 3: Array.prototype.at()

// const arr = [1, 2, 3, 4, 5];
// let index = 2; // return element at the index
// console.log(`An index of ${index} returns ${arr.at(index)}`);
// index = -2; // counts back from the last item of the array
// console.log(`An index of ${index} returns ${arr.at(index)}`);
//OUTPUT: 
// An index of 2 returns 3
// An index of -2 returns 4

//--------------------

// const arr = [1, 2, 3, 4, 5];
// let index =  5; // index >= arr.length (5 >= 5)
// console.log(`An index of ${index} returns ${arr.at(index)}`); // An index of 8 returns undefined
// index = -6; // idx = arr.length + index = 5 + (-6) = -1
// console.log(`An index of ${index} returns ${arr.at(index)}`); // An index of -6 returns undefined

//---------------------

// const arr = [1, 2, 3, 4];
// const lastElem = arr.at(-1); // index = 4 + (-1) = 3
// console.log(lastElem) // 4

//##################################################################################