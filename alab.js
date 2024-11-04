// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check if all numbers are divisible by 5. Cache the result in a variable.
const isdiv5 = (n1 % 5) +(n2 % 5) + (n3 % 5) + (n4 % 5) == 0;

// Check if the first number is larger than the last. Cache the result in a variable.
const greaterthan = n1 > n4 ;

// Accomplish the following arithmetic chain:
// Subtract the first number from the second number.
// Multiply the result by the third number.
// Find the remainder of dividing the result by the fourth number.

const chain = ((n2 - n1)* n3) == n4 ;

// Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons. Rename the variable as appropriate.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// How many gallons of fuel will you need for the entire trip?
const trip = 1500;
let ex1 = 30;
let ex2 = 28;
let ex3 = 23;

const gal1 = trip/ex1;
const gal2 = trip/ex2;
const gal3 = trip/ex3;


 





console.log(gal1);
