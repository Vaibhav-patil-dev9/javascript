let score = "hitesh"

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);
// 1 => true; 0 => false
// "" => false
// "hitesh" => true
let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

//---------------------------- conversion operartions ----------------------------

let value = 3
let negValue = -value
console.log(negValue)

// operation like + - * /  %
// if any one operand is string => + => concatenation
// for other operators => type conversion to number

let str1 = "5"
let str2 = "10"

// console.log(str1 + str2) // "510"
// console.log(str1 - str2) // -5
// console.log(str1 * str2) // 50
// console.log(str1 / str2) // 0.5
// console.log(str1 % str2) // 5

// console.log("1" + 2);
// console.log(1 + "2");
// console.log(1+2+"3");

console.log("Hello" - "World"); // NaN
console.log("Hello" + "World"); // HelloWorld
console.log("5" * "World"); // NaN
console.log("5" + "10"); // 510

