//? 1- Find duplicate elements in an array

const arr = [1, 10, 2, 30, 4, 30, 2, 1, 10, 30, 5, 7, 5, 6, 7, 8, 7, 8, 9];

//* sol-1 new set--- removes all the duplicate elements of the array

const uniqueNumbers = new Set(arr);
console.log(uniqueNumbers); //returns set of unique numbers
console.log(Array.from(uniqueNumbers)); //returns array of unique numbers

//* sol-2 filter method--- gives us the numbers which are repeating

const repeatingNumbers = arr.filter(
  (ele, ind, arr) => arr.indexOf(ele) !== ind
);
console.log(repeatingNumbers);

//? 2- Find max and min value of an array

const maxValue = Math.max(...arr);
const minValue = Math.min(...arr);
console.log(maxValue, minValue); //returns just the value

//? 3- Array sort() method

console.log(arr.sort);
console.log(arr.sort()); //* turns every element into strings then ascends the values

//? Correct way of arranging values

const ascendingOrder = arr.sort((a, b) => {
  return a - b;
});

console.log(ascendingOrder);

const descendingOrder = arr.sort((a, b) => {
  return b - a;
});

console.log(descendingOrder);

//? 4- Boolean type

console.log(true);
console.log(false);
console.log(true + true); //2--true evaluates to 1 and false evaluates to 0
console.log(true + false); //1
console.log(true + true + false - true); //1
console.log(true + true - true - false + true - true - false + true); //2

//? 5-- !!

console.log(!!10 + 20); //21---!! converts a number to a boolean
// !10 is false and !false is true and true evaluates to 1 so 1+20=21

//? 6-- rest parameter

function name1(...params) {
  console.log(params);
  console.log(typeof params);
}
name1(67);

//? 7-- shadowing

var num = 10;
{
  var num = 100;
  console.log(num); //100
}

console.log(num); //100

var num1 = 10;

(function shadowVar() {
  var num1 = 1000;
  console.log(num1); //1000
})();

console.log(num1); //10

let num2 = 20;
{
  let num2 = 200;
  console.log(num2); //200
}

console.log(num2); //20

const num3 = 30;
{
  const num3 = 300;
  console.log(num3); //300
}

console.log(num3); //30

var num4 = 14;

//! let num4 = 20;--can't do this as num4 is alreday declared in the global scope

//? no problem with the below code as num4 wuth let is in a different scope
{
  let num4 = 20;
  console.log(num4);
}

console.log(num4);

//? 8-- Illegal shadowing

//! can't do the reverse of the above that is declaring a variable with let and then redecalring that again with var in a diff scipe that i called illegal shadowing

//? 9-- increment Operator

let count = 0;
// console.log(++count);//1
console.log(count++); //0

//? 10-- objects

const person = {
  name: "dc",
  age: 27,
  job: "berozgaar",
};

console.log(person);

//* how to delete an item?

delete person.job;
console.log(person);

//* adding new key with space in the name

person["dream job"] = "Programmer";
// person."dream job" = "Programmer";--not applicable

console.log(person);

//? 11-- sum of values in an object

const firstItem = "chicken Biryani";
const lastItem = "chicken Manchurian";

const foodItems = {
  [firstItem]: 100,
  chilli_chicken: 200,
  friedRice: 120,
  // lastItem: lastItem,
  // lastItem,
};

console.log(foodItems);

let total = 0;
for (const item in foodItems) {
  total = total + foodItems[item];
  // console.log(foodItems[item]);
}
console.log(total); ///420

//? 12-- object with same key name

const sameName = {
  c: 60,
  a: 10,
  b: 20,
  a: 20,
  c: 40,
};

console.log(sameName); //* takes the last value of the repeated key but maintains the order of keys in the object

//? 13-- Closure Question

function createBase(a) {
  function innerFunction(b) {
    return a + b;
  }
  return innerFunction;
}

let addSix = createBase(6);
console.log(addSix);
console.log(addSix(10)); //16
console.log(addSix(21)); //21

//? 14-- Error/Exception Handling

try {
  console.log("a" + 80);
  console.log(a * 80);
} catch (e) {
  console.log(`${e} , error in try block`);
} finally {
  console.log(
    "does't care about try or catch block, it will execite the code inside it under any case"
  );
}

//? 15-- Optional Chaining

const nestedObj = {
  name: "code",
  lang: "js",
  num: 23,
  nothing: undefined,
  block: "scope",
  innerObj1: {
    lang1: "js1",
    num1: 231,
    block1: "scope1",
    innerObj12: {
      lang12: "js12",
      num12: 2312,
      block12: "scope12",
    },
  },
};

console.log(nestedObj?.innerObj19?.innerObj12?.num12); //undefined
console.log(nestedObj?.innerObj1?.innerObj12?.num12); //2312
console.log(nestedObj?.innerObj1?.innerObj12?.num12.p); //undefined

//? 16--  Nullish coalescing Opeartor

console.log(nestedObj.nothing ?? nestedObj?.innerObj1?.innerObj12?.block12); //5
//* if left side of an expression gives null or undefiend then the right side of that will be returned
console.log(
  nestedObj?.innerObj19?.innerObj12?.num12 ??
    nestedObj?.innerObj1?.innerObj12?.num12
);

//? 17-- call,apply,bind methods

//* all the above methods are used for Function Borrowing--- we can create a function and can attach that same function to various objects

const printName = function (city, state) {
  console.log(
    `Person: ${this.fname} ${this.lname} from city: ${city} and state: ${state}`
  );
};

const printName2 = function (city, state) {
  console.log(
    `Person: ${this.fname} ${this.lname} from city: ${city} and state: ${state}`
  );
};

const printName3 = function (city, state) {
  console.log(
    `Person: ${this.fname} ${this.lname} from city: ${city} and state: ${state}`
  );
};

const person1 = {
  fname: "Kolta",
  lname: "Mota",
};

const person2 = {
  fname: "Yolta",
  lname: "Gota",
};

const person3 = {
  fname: "Coutia",
  lname: "Soutia",
};

const person4 = {
  fname: "Woutoa",
  lname: "Etua",
};

const person5 = {
  fname: "Utiya",
  lname: "Wetuia",
};

const person6 = {
  fname: "Tiyua",
  lname: "Kiuya",
};

//* call, apply and bind can be used on any function

//? call method

printName.call(person1, "Kolkata", "WB");
printName.call(person2, "Mumbai", "Maha");

//? apply method--same as call but the parameters except the first on must be passed as an array list

printName2.apply(person3, ["Delhi", "NI"]);
printName2.apply(person4, ["Chennai", "TN"]);

//? bind method---same as call method but it doesn't invoke the function immediately rather it returns the function itself than we can execute it later

const bindName1 = printName3.bind(person5, "Gujrat", "DK");
const bindName2 = printName3.bind(person6, "Lucknow", "DK");
console.log(bindName1);
bindName1();
console.log(bindName2);
bindName2();

//! can't pass/use template strings inside call method

//? 18-- Weired Cases

//! console.log([] + []); //gives nohing
console.log([] + {}); //[object Object]
console.log({} + []); // challenges.js:250 [object Object]
console.log({} + {}); // challenges.js:251 [object Object][object Object]
console.log([] == ""); //true
//! console.log([] === ""); //false
console.log([] == 0); //true
//! console.log([] === 0); //false
console.log({} == 0); //false
//! console.log({} === 0); //false
console.log(Math.max()); //* -Infinity
console.log(Math.min()); //* Infinity

//? 19-- cut array length / reduce array length

const arr1 = [1, 2, 3, 4, 5, 67];
console.log(arr1);

//* method-1--fixing the length
// arr1.length = 3;
// console.log(arr1);
//* method-2--slice method
console.log(arr1.slice(0, 3));
// console.log(arr1); //* doesn't affect the original array

//? 20-- sum array elements

let arrSum = 0;

//* method-1---foreach and taking an initial varibale

arr1.forEach((item) => {
  arrSum = item + arrSum;
});

console.log(arrSum);

//* method-2---reduce method

const arrTotal = arr1.reduce((a, b) => {
  return a * b;
});

console.log(arrTotal);

//? 21-- remove duplicate values form array

const arr2 = [1, 2, 1, 3, 4, 5, 2, 4, 3, 67];

const un = new Set(arr2);
console.log(un);
console.log([...un]); //* to get an array from a set we can also use spread operator
console.log(Array.from(un));

//? 22-- Comma Opeartor

const commaOpeartor = (1, 2, 3);
console.log(commaOpeartor); //* comma opeartor returns the last value

let aValue = 10;
// aValue = (aValue++, 100); //* comma opeartor--100
aValue = (aValue++, aValue); //* comma opeartor--11
console.log(aValue); //11

//? 23-- Swaping values with destructuring

let x = 20;
let y = 10;
//* now, we want to put the value of x in y and vice versa

[x, y] = [y, x]; //* using destructuring

console.log(x, y);

//? 24-- Convert a string to an array

const str = "Hello, I want to get a job in Code Clouds";

console.log([str]); //* only 1 element in the array which is the whole element

console.log(str.split()); //* same output as above

console.log([...str]); //* separates all characters and creates an array with all the cahrarters in thestring

console.log(str.split("")); //* same as above

console.log(str.split(" ")); //* separates from space and creates the array

console.log(str);

//? 25-- replace characters in the string

const str1 = "Hello, hello hello I want to get a job in Code Clouds";

const replacedStr = str1.replace(/h/gi, "k").replace(/c/gi, "u");
console.log(replacedStr); //*only all the characters--if using regex

//? 26-- remove first character in the string

const firstCharRemoved = str1.slice(1);
console.log(firstCharRemoved);

//? 27-- remove last character in the string

const lastCharRemoved = str1.slice(0, str1.length - 1);
console.log(lastCharRemoved);

//? 28-- reverse a string

const newStr = "I will be reversed";
const reservedStr = newStr.split("").reverse().join("");
console.log(reservedStr);

//? 29-- Remove White Space from a string

const sapcedStrFront = "      I am a string with lots of space at the front";
console.log(sapcedStrFront);
console.log(sapcedStrFront.trimStart());

const sapcedStrLast = "I am a string with lots of space at the front     ";
console.log(sapcedStrLast);
console.log(sapcedStrLast.trimEnd());

const sapcedStrBoth = "   I am a string with lots of space at the front     ";
console.log(sapcedStrBoth);
console.log(sapcedStrBoth.trim());

//? 30-- Remove string before specific character

const sliceThisStr = "slice this string";
const slicedStr = sliceThisStr.slice(0, 3);
console.log(slicedStr);
console.log(sliceThisStr); //* no effect on the original string

//? 31-- Capitalize the first character of a string

const capStr = "capitalize the first c";
console.log(capStr.charAt(0).toUpperCase());
console.log(capStr); //* original str remains intact

//? 32-- Write a function that returns the longest word in a sentence(string)

function findLongestWord(str) {
  const arrStr = str.split(" ");
  const b = arrStr.sort((a, b) => {
    return b.length - a.length;
  })[0];
  console.log(`The longest word in the given string is: ${b}`);
}

findLongestWord("This is a javascript question");

//? 33-- Write a function that returns the shortest word in a sentence(string)

function findShortestWord(str) {
  const arrStr = str.split(" ");
  const b = arrStr.sort((a, b) => {
    return a.length - b.length;
  })[0];
  console.log(`The shortest word in the given string is: ${b}`);
}

findShortestWord("This is a javascript question");

//? 34-- Write a function that checks whether a given string is palindrome or not

function palindromeStr(str) {
  //* check for both numbera nd string
  const numStr = str.toString();
  //* if passed value is a number then convert it to a string first then to an array
  const numStrConverted = numStr.split("").reverse().join("");
  // const revStr = str.split("").reverse().join("");
  if (numStrConverted === numStr) {
    console.log("The given string is a palindrome");
  } else {
    console.log("The given string is not a palindrome");
  }
}

palindromeStr("mom");
palindromeStr("noon");
palindromeStr("civic");
palindromeStr("level");
palindromeStr(1001);
palindromeStr(121);
palindromeStr(1331);

//? 35-- Write a function that checks whether 2 given strings are anagrams or not

function isAnagram(str1, str2) {
  const sort1 = str1.split("").sort().join("");
  const sort2 = str2.split("").sort().join("");
  // console.log(sort1, sort2);
  sort1 === sort2
    ? console.log("Both strings are anagrams")
    : console.log("Both strings are not anagrams");
}

isAnagram("silent", "listen");
isAnagram("silent", "listenc");

//? 36-- Write a function that returns the no of vowels in a string

//* do it with regex---match method method on str and use search method on input values in case of form validations

function vowelCount(str) {
  const vowelsRegex = /[aeiou]/gi; //*gi-g--global matches all occurences and i-case insecnsitive
  const strMatches = str.match(vowelsRegex);
  if (strMatches) {
    console.log(strMatches);
    console.log(strMatches.length);
  } else {
    console.log("no vowels");
  }
}
vowelCount("bb");
vowelCount("bbaa");
vowelCount("bbAOIRTa");
vowelCount("zwtr");

//? 37-- Write a function to check if a given number is prime or not

function isPrime(num) {
  if (num === 0) {
    console.log("invalid num");
  } else if (num === 1) {
    console.log("1 is neither composite nor prime");
  }

  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(5));
console.log(isPrime(0));
console.log(isPrime(1));
console.log(isPrime(7));
console.log(isPrime(11));
console.log(isPrime(16));
console.log(isPrime(18));
console.log(isPrime(23));

//? 38-- Write a function to calculate the factorial of a number

function findFac(num) {
  let fac = 1;
  //* we have to take an initial number as 1 and keep on multiplying that up until to the actual number itself via for loop
  if (num === 0) {
    console.log("invalid num");
  }
  for (let i = 1; i <= num; i++) {
    fac = fac * i;
  }
  console.log(fac);
}

findFac(5);

//? 39-- Write a function to remove whitespaces from a string

//* remove all white spaces

function removeAllSpace(str) {
  const removeStrSpace = str.replace(/\s/g, ""); //* \s-spaces,tabs,line breaks
  console.log(removeStrSpace);
}

removeAllSpace("Here we have a    lot   of space");

//* Write a function to remove multiple whitespaces from a string and keep only one

function keepOnlyOneSpace(str) {
  const removeStrSpace = str.replace(/\s+/g, " "); //* \s-spaces,tabs,line breaks
  console.log(removeStrSpace);
}

keepOnlyOneSpace("Here we have a    lot   of space");

//? 40-- Pollyfill for bind()

//* pollyfill means that we have to create our own implementation of the bind function

const personName = {
  firstName: "Octopus",
  lastName: "Gond",
};

const printPersonName = function (hometown, state, country) {
  console.log(
    this.firstName +
      " " +
      this.lastName +
      " from " +
      hometown +
      " ," +
      state +
      "," +
      country
  );
};

const resultOfBind = printPersonName.bind(personName, "Delhi");
console.log(resultOfBind);
resultOfBind("NI", "India");

//* write a function which behaves exactly like the bind function

//? every function is js has access to bind() so myOwnBind should also be access by every function that we create in js

//*** The following code is the basic implementation of myownbind function ***/

Function.prototype.myOwnbind = function (...args) {
  //? inside this myOwnbind function the this variable points to the printPersonName function
  const thisVariable = this;
  const params = args.slice(1);
  return function (...args2) {
    //* args2 gets the argumenst passed from resultOfMyOwnBind
    // thisVariable.call(args[0], params);
    thisVariable.apply(args[0], [...params, ...args2]); //* as params is in form of an array itself,so can't use call method to pass an array as an argument
  };
};

//*** The above code is the basic implementation of myownbind function ***/

const resultOfMyOwnBind = printPersonName.myOwnbind(personName, "UP", "India"); //*here India will come first
resultOfMyOwnBind("Kolkata");

//*when this is called then printPersonName this function should be executed--use this keyword

//? 41-- Function Currying

//* 1)-- via bind() function

const multiply = function (x, y) {
  console.log(x * y);
};

// const multiply = function ( y) {
// const x=2
//   console.log(x * y);
// };//*--a copy of multiply via bind() with prested argument

const multiplyByTwo = multiply.bind(this, 2); //* don't care about the first argument the second argument is stored into x--the first parameter
multiplyByTwo(3); //* this 3 is taken by y---2nd parameter--result is 6

const multiplyByThree = multiply.bind(this, 3); //* don't care about the first argument the second argument is stored into x--the first parameter
multiplyByThree(3); //* this 3 is taken by y---2nd parameter--result is 9

//? The above concept is known as function Currying---we can create  multiplyByTwo, multiplyByThree from a single function multiply--we preset some arguments inside the function

const multiplyByFour = multiply.bind(this, 3, 4);
multiplyByFour(3); //12

//* here  multiplyByFour(3); this 3 is ignored and the result is 12

const multiplyByFive = multiply.bind(this);
multiplyByFive(5, 6); //30---5=x , y=6

//* 2)-via closures

const multi = function (x) {
  return function (y) {
    console.log(x * y);
  };
};

const resMulti = multi(2);
resMulti(4);

const resMulti2 = multi(20);
resMulti2(40);

//* The above is also function currying via closures

//? 41-- Spread operator and concatenating arrays

const arr3 = [1, 2, 3, 4, 56, 8];
const arr4 = ["a", "b", "c"];
const arr5 = ["type", ...arr3, ...arr4, "9", (arr3[5] = 5)];
console.log(arr5); //* concatenated array of arr3 and arr4

//? 42-- Spread operator and concatenating objects

const obj1 = {
  a: 10,
  b: 20,
};

const obj2 = {
  c: 100,
  d: 200,
};

const obj3 = { e: 70, ...obj2, ...obj1, a: 30, y: 80, d: 57 }; //* to override a value you have to put it after you have spread the object
console.log(obj3);

//? 43--
function fruit() {
  console.log(names); //* undefined
  // console.log(price); //* ref error---Cannot access 'price' before initialization---before executing a single line of code undefined will be stored in the names varibale so at first we get undefined
  var names = "apple"; //* hoisted
  let price = 20; //* hoisted but kept in a diff scope and ij temporal dead zone
}

fruit();

//? 44--

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => {
//     console.log(i); //3,3,3
//   }, 1000);
// }

// for (let i = 0; i < 3; i++) {
//   setTimeout(() => {
//     console.log(i); //0,1,2
//   }, 1000);
// }

//? 45--
console.log(+true); //1
console.log(+false); //0
console.log(+"true"); //NaN
console.log(typeof +true); //number
console.log(typeof +false); //number
console.log(true); //true
console.log(typeof true); //boolean

//? 46--
console.log(!"dc"); //false
console.log(typeof "dc"); //string
console.log(!!""); //false

//? 47--
let data = "size";
const bird = {
  size: "small",
};
console.log(bird[data]); //small
console.log(bird["size"]); //small
console.log(bird.size); //small
console.log(bird.data); //undefined

//? 48--
let c = {
  nam: "peter",
};
let d;
d = c;
c.nam = "parker";
console.log(d.nam); //* parker---as we are doing it like d=c which is by ref id---memory location is same (deep copy) and not only value(shallow copy)

//? 49--
var x1;
var x1 = 10;
console.log(x1); //10

//? 50--
var x1;
{
  let x1 = 100;
  console.log(x1);
}
//? illegal shadowing
// let b1=10;
// {
//   var b1=1;---not allowed--illegal shadowing
// }

// let x1 = 10; //*error-x1 is alreday being decalred--can't declare in the same scope
console.log(x1);

//? 51--
let a = 3;
let b = new Number(3);
console.log(b); //* object
console.log(a == b); //* true
console.log(a === b); //* false

//? 52--
let w;
w1 = {};
console.log(w1);
console.log(w);

//? 53--
function fruit1() {
  console.log("woof");
}
fruit1.name = "apple"; //* Ignored--done by mistake
console.log(fruit1()); //undefined

//? 54--
let number = 0;
console.log(number++); //returns 0, value 1
console.log(++number); //returns 2 , value 2
console.log(number); //returns 2 , value 2

//? 55--
function getAge() {
  "use strict";
  const age = 21; //* ref-error age is not defined if w edon't use any keyword to define the age variable
  console.log(age);
}
getAge();

//? 56--
const sum1 = eval("10*10+5"); //* eval performs taking the arguments as number--converts string into numbers-- * is > +
console.log(sum1); //* 105 number

//? 57--
const obj4 = {
  1: "a",
  2: "b",
  3: "c",
  hello: "d",
};

console.log(obj4.hasOwnProperty("1")); //* true
console.log(obj4.hasOwnProperty(1)); //* true
// console.log(obj4.hasOwnProperty(hello)); //! error
console.log(obj4.hasOwnProperty("hello")); //* true
//? hasOwnProperty--used to check whether an obj has any particular proerty or not-- only applicable for numeric values as keys

//? 58--
//* continue keyword
for (let i = 0; i < 5; i++) {
  if (i === 3) continue;
  console.log(i); //? 0,1,2,4
}
//* when i===3 then that iteration will be skipped, the continue keyword makes it skip that iterartion and the loop goes into the next iteration

//? 59--
const sortArr = ["b", "az", "ca", "m", "i", "p"];
const newSortArr = sortArr.sort((a, b) => {
  return a.localeCompare(b);
});
console.log(newSortArr); //* arranged in dictionery order
console.log(sortArr); //*original array is also altered

//? 60--
const per = {
  nam2: "lu",
};

function sayHi(age) {
  return `${this.nam2} is ${age} years`;
}

console.log(sayHi.call(per, 21)); //* "lu is 21"
console.log(sayHi.apply(per, [21])); //* "lu is 21"
console.log(sayHi.bind(per, 21)); //* returns a function
console.log(sayHi.bind(per, 21)()); //* "lu is 21"

//? 61--
function sayHi1() {
  return (() => 0)(); //* iife
}
console.log(typeof sayHi1()); //* number
console.log(sayHi1()); //* 0

//? 62--
function sayHi2() {
  return () => 0;
}
console.log(typeof sayHi2()); //* function
console.log(sayHi2()); //* () => 0
console.log(sayHi2()()); //* 0
console.log(typeof sayHi2()()); //* number

//? 63--
console.log(typeof typeof 1); //* string--typeof number is string

//? 64-- Everything in js is either primitive or object

//? 65--
const nums = [1, 2, 3];
nums[9] = nums;
console.log(nums); //* we will get an infinte array at the 9th index and empty values in b/w the indexes

//? 66--
console.log(!!null); //false
console.log(!!""); //false
console.log(!!1); //true

//? 67--
// console.log(
//   setInterval(() => {
//     console.log("Hi");
//   }, 1000)
// );

// console.log(
//   setInterval(() => {
//     console.log("Hi");
//   }, 1000)
// );

// console.log(
//   setInterval(() => {
//     console.log("Hi");
//   }, 1000)
// );

//* setinterval will return 1,2,3 the id of each individual setinterval then it will keep on printing Hi--it will always start with id 1

//? 68--
console.log([..."dc"]); // (2)[("d", "c")];
const namStr = "dc"; // (2) ['d', 'c']
console.log(...namStr); // d c
console.log([...namStr]); // (2) ['d', 'c']
console.log({ ...namStr }); // {0: 'd', 1: 'c'}

//? 69--
console.log(typeof 3 + 4 + "5"); //* number45
console.log(typeof (3 + 4 + "5")); //* string
console.log(typeof (3 + 4 + +"5")); //* number---as +"5" converts 5 string as number

//? 70--
let num9 = [1, 2, 3, "9"];
let mapNum = num9.map((a) => {
  if (typeof a === "number") {
    return; //* return undefined
  } else {
    return a * 2;
  }
});
console.log(mapNum); //(3) [undefined, undefined, undefined, 18]

//* map returns an array with the same lenth of the original array with values that we have returned from the map condition

//? 71--Important--same concept of ref id and value
function getInfo(m) {
  m.info = "DC";
}
const mem = {
  info: "sarah", //*as doing by ref id so changing in one place effects the other as well-- whenever we will pass an obj to a func then it goes by the ref id
};
getInfo(mem);
console.log(mem); //* { info: "DC",}--as doing by ref id so changing in one place effects the other as well-- whenever we will pass an obj to a func then it goes by the ref id

//? 72--
function Car() {
  this.make = "tata";
  return { make: "kia" };
}
const myCar = new Car();
console.log(myCar.make);

//? 73--
(() => {
  let x = (y = 10);
})();
console.log(x); //10
console.log(typeof x); //number

//? 74--
(() => {
  let x = (y = 10);
})();
console.log(y); //10
console.log(typeof y); //number

//? 75--
(() => {
  let x = 10;
})();

(() => {
  let x = 10;
})();
console.log(x);

//? 76--
(() => {
  let xa = (y = 10);
})();

(() => {
  let xa = (y = 20);
  //* its like let x=20
  //*  y=20---globally accesible
})();
console.log(y); //* y is by default decalred with var---20
// console.log(xa); //* error

//? 77--
// let p = (q = 200);
// console.log(p);//200
// console.log(q);//200

//? not allowed--as var is function scoped

// let ccc = 20;
// {
//   var ccc = 200;
// }
//? allowed--as var is function scoped
// let ccc = 20;
// function cc() {
//   var ccc = 200;
// }

//? 78--
// console.log(qa); //* error--- not defined
(() => {
  // console.log(qa); //* error--- not defined
  let p = (qa = 200);
  //? let p,
  //? qa=200--- a global varibale accesible anywhere
  console.log(p); //*200
  console.log(qa); //*200
})();

// console.log(p); //* error
console.log(qa); //*200

//? 79--
function anything() {
  let z = (i = 2000);
  console.log(z);
  //? i=2000--- a global varibale accesible anywhere
}
anything();
// console.log(z); //*error
console.log(i); //*2000

//? 80--Function Closures and hoisting
var bb = 1;
function outer() {
  var bb = 2;
  console.log(bb); //2
  function inner() {
    console.log(bb); //* undefined---because of hoisting
    bb++; //* undefined+1
    console.log(bb); //* NaN
    var bb = 3; //* completely new variable with same name, so it will be hoisted within the function and closure conecpt will not work here
    console.log(bb); //* 3
  }
  inner();
}
outer();
console.log(bb); //1

const bbb = 1;
function outer1() {
  let bbb = 2;
  console.log(bbb); //2
  function inner1() {
    console.log(bbb); //* error--as let and const are not accesbile before ddclaraing
    bbb++; //* 3---here closure conecpt is working
    console.log(bbb); //* NaN
    // const bbb = 3; //* completely new variable with same name, so it will be hoisted within the function and closure conecpt will not work here
    console.log(bbb); //* 3
  }
  inner1();
}
outer1();
console.log(bbb); //1

let bbbb = 1;
function outer10() {
  let bbbb = 2;
  console.log(bbbb); //2
  function inner10() {
    console.log(bbbb); //* error--as let and const are not accesbile before ddclaraing
    bbbb++; //* 3---here closure conecpt is working
    console.log(bbbb); //* NaN
    // let bbbb = 3; //* completely new variable with same name, so it will be hoisted within the function and closure conecpt will not work here
    console.log(bbbb); //* 3
  }
  inner10();
}
outer10();
console.log(bbbb); //1

var aa = 1;
function outer3() {
  var aa = 2;
  console.log(aa); //2
  function inner3() {
    console.log(aa); //*2
    aa++; //*3
    console.log(aa); //* 3
    //* var aa = 3;---redclaration causing the main problem in the above
    console.log(aa); //* 3
  }
  inner3();
}
outer3();
console.log(aa); //1

var aaa = 1;
function outer30() {
  var aaa = 2;
  console.log(aaa); //2
  function inner30() {
    console.log(aaa); //*undefined
    aaa++; //*undefined+1
    console.log(aaa); //* nan
    var aaa = 3;
    console.log(aaa); //* 3
  }
  return inner30;
}
outer30()(); //*equivalent to belo codes
//* const result = outer30();
//* result()
console.log(aaa); //1

//? 81--Function Scope Question
(function () {
  var xx, yy;
  try {
    throw new Error(); //* throwing error so it'll go to catch block
  } catch (xx) {
    xx = 1; //* x of catch block
    yy = 2;
    console.log(xx); //1
  }
  console.log(xx); //* undefined---the initial x with no value
  console.log(yy); //2
})();

//? 82--String+Substring
const strToSubStr = "Check the substring from this string which is mainstring";
const subStr = "string";
console.log(strToSubStr.includes(subStr)); //* true
console.log(strToSubStr.indexOf(subStr)); //* first occurence

//?  how many times subStr occurs in strToSubStr??

console.log(strToSubStr.split(subStr)); //* gives one extra element
console.log(strToSubStr.split(subStr).length);
console.log(strToSubStr.split(subStr).length - 1); //* how many times subStr occurs in strToSubStr??

//? 83--Array to Object

//* nested array to object
const bigNestedArr = [
  ["a", "b"],
  ["c", "d", "e"],
  [10, 20],
  [30, "20", "r"],
];
console.log(Object.fromEntries(bigNestedArr));

//* not nested array to object
const onlyArr = ["a", "b", 10, 70];
console.log({ ...onlyArr }); //* keys of the object are the index values of the array

//? 84--Floating Points
const float1 = 0.1;
const float2 = 0.2;
if (float1 + float2 === 0.3) console.log("yaay");
else {
  console.log("not yaay");
}
//* for floating points multiply the number with 10/100 and make it integer then perorm calculations

const float3 = 0.3;
const float4 = 0.4;
if (float3 + float4 === 0.7) console.log("yaay");
else {
  console.log("not yaay");
}
//? 85-- Object Constructor Function

function Student(fname, lname, age, cls) {
  console.log(this);
  (this.firstName = fname),
    (this.lastName = lname),
    (this.age = age),
    (this.class = cls);
  this.fullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}

const student1 = new Student("Big", "Guy", 23, "five");
const student2 = new Student("Little", "Guy", 73, "hundred");
const student3 = new Student("No", "Guy", 93, "fivehundred");

//! student1();---not a function

console.log(student1);
console.log(student1.age);
console.log(student1.lastName);
console.log(student1.fullName);
console.log(student1.fullName());
//* adding new property/key in just student1 object and not on the other objects
student1.location = "Hyderabad";
console.log(student1);
console.log(student1.location);

console.log(student2);
console.log(student2.age);
console.log(student2.lastName);
console.log(student2.fullName);
console.log(student2.fullName()); //? fullname is a function attached to the constructor itslef
console.log(student2.location); //? undefined

console.log(student3);
console.log(student3.age);
console.log(student3.lastName);
const fullName3 = student3.fullName;
console.log(fullName3); //? gives function
// console.log(fullName3()); //undefined undefined
const resultName3 = student3.fullName();
console.log(resultName3);

//? 86-- Getter and Setter--used on objects to get and set any prtoperty name
//* Getter
const objectExample = {
  fname: "Koala",
  lname: "putta",
  get getName() {
    //* getter--get--- to get any property
    console.log(
      `FULLNAME: ${this.fname.toUpperCase()} ${this.lname.toUpperCase()}`
    );
  },
};
objectExample.getName;
//? here getName acts only as a property ans not a function no () needed

//* Setter
const objectExample1 = {
  fname: "Euoala",
  //* now we want to change this fname to something else through set function
  lname: "Yutta",
  set setName(a) {
    //* setter--set function to set/change any property
    console.log((this.fname = a.toUpperCase()));
  },
};

objectExample1.setName = "srt";
console.log(objectExample1);
//? here setName acts only as a property ans not a function no () needed---so while setting a value to it we have to use = sign and  not ()

//? 87--Array.from()

//* mapping array via Array.from()

const arrFrom = [1, 2, 3, 4, 5];
const doubleArrFrom = Array.from(arrFrom, function double(iterator) {
  return iterator * 2;
});
console.log(doubleArrFrom);

//* building an array from Array.from()---no array provided

const newArray = Array.from({ length: 5 }, function double(iterator, index) {
  return index * 2;
});
console.log(newArray);

const newArray1 = Array.from({ length: 5 }, function double(iterator, index) {
  return index * 2 + 1;
});
console.log(newArray1);

const newArray2 = Array.from({ length: 5 }, function double(index) {
  return index * 2;
});
console.log(newArray2); //---[NaN, NaN, NaN, NaN, NaN]

//? 88--"this"---tricky question
var length = 10;
function fn() {
  console.log(this.length); //* as this is window object and length is defined in the global space using var so it gets attached to window--- this.length= 10
}
var obj10 = {
  length: 5,
  method: function (fn) {
    fn();
    arguments[0](); //* 2
  },
};
obj10.method(fn, 1);

//? 89-- Higher Order Function and Pollyfill for map()
//* given is radius of 4 circles , we need to find out area , cricumference and diameter of these circles

const radius = [3, 4, 6, 9];
const calculateArea = radius.map((r) => {
  return Math.PI * r * r; //we must return for map,filter(true/false) methods
});
console.log(calculateArea);

const calculateCircumference = radius.map((r) => {
  return 2 * Math.PI * r; //we must return for map,filter(true/false) methods
});
console.log(calculateCircumference);

const calculateDiameter = radius.map((r) => {
  return 2 * r; //we must return for map,filter(true/false) methods
});
console.log(calculateDiameter);

//* same answer via differnet approach

// const output = [];

function area() {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(Math.PI * radius[i] * radius[i]);
  }
  console.log(output);
}
// console.log(output);--- empty array

area();

function circum() {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(2 * Math.PI * radius[i]);
  }
  console.log(output);
}
// console.log(output);--- empty array

circum();

function dia() {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(2 * radius[i]);
  }
  console.log(output);
}
// console.log(output);--- empty array

dia();

//* implementing hof---concept of Functional Programming

const onlyArea = function (radius) {
  return Math.PI * radius * radius;
};

const onlyCir = function (radius) {
  console.log(2 * Math.PI * radius);
};

const onlyDia = function (radius) {
  console.log(2 * radius);
};

const calculate = function (arr, logic) {
  const output = [];
  for (let i = 0; i < arr.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};

//? calculate is the HIGHER ORDER FUNCTION --- and onlyArea is the callback function

//? calculate is the Pollyfill of map() as it works exactly like map()

console.log(calculate(radius, onlyArea)); //* by this way we can get the array
calculate(radius, onlyCir); //* gives single values not in array format
calculate(radius, onlyDia);

//? we can make calculate more similar to map() by placing i inside Array.Prototype--by that way every array can have the calculate method availbale on it--we can call it like--- console.log(radius.calculate(onlyArea); and we don't need to pass the radius array itslef and by using "this" keyword we can get access to the radius array so use this in all the places where you used array)

//? 90-- Pure and Impure functions and Side Effects
function pure(a, b) {
  return a + b;
}

console.log(pure(6, 8));

//* The above is an example of pure function--- it gives same ouput for same input all the time and its state never changes---has no side effect

function imPure(a, b) {
  console.log(a + b);
}

imPure(6, 8);
//* The above is an example of impure function--- although it gives same ouput for same input all the time but due to console.log it changes the state of our application and console.log is the side effect

function imPure1(a, b) {
  const rand = Math.floor(Math.random() * (25 - 15)) + 15;
  return a + b + rand;
}

// const rand = Math.floor(Math.random() * (max - min)) + min;
// const rand = Math.floor(Math.random() * (max - min +1 )) + min;

console.log(imPure1(4, 7));
// console.log(imPure1(4, 7));
// console.log(imPure1(4, 7));
// console.log(imPure1(4, 7));
// console.log(imPure1(4, 7));

//* imPure1 it is an impure function---as it gives diff output for same input

//? 91-- flat() array method
const multiDArr = [1, 2, 3, [4, 5, 6, [7, 8, 9]]];
//* now we have to falten this array---that is we have to conevrt this 3D array into a 1D array

const faltArr = multiDArr.flat();
console.log(faltArr); // [1, 2, 3, 4, 5, 6, Array(3)]
//* the above flatens the array upto 1 level-- which is same as doing

const faltArr1Level = multiDArr.flat(1);
console.log(faltArr1Level);
//* for faltening multi level we need pass 2 as parameter to the falt()

const faltArr2Level = multiDArr.flat(2);
console.log(faltArr2Level); // converted to a 1D array

//? 92-- flatMap() array method
const nestedArr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
//* we want to falten this nested array of an array where all the items of an array are in nested form
//* flatmap is a combination of map() and flat() method first it maps and then flatens the nested array and converts it into a 1D array
const newFlatArr = nestedArr.flatMap((el, index) => {
  return [el[0] + el[1] + index];
});
console.log(newFlatArr); //[Array(1), Array(1), Array(1)]
//* we are getting the sum of each arr element but its coming in the form of a nested array--- we want to falten this as well---use flatMap(

//? 93-- Class in es6 js
class School {
  name;
  location;
  playground = "not available";
  remove() {
    return "school deleted";
  }
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }
}

const school1 = new School("Big School", "Out of the world");
console.log(school1);
console.log(school1.remove);
console.log(school1.remove());
const school2 = new School("Small School", "Out of the world now");
console.log(school2);
console.log(school2.remove);
console.log(school2.remove());

//* Inheritence---can share the properties of one class into other

class NewSchool extends School {
  playground = "available";
}
const newSchool1 = new NewSchool("Fake School", "Not present");
console.log(newSchool1);
console.log(newSchool1.remove);
console.log(newSchool1.remove());
//? 94--
//? 95--
//? 96--
//? 97--
//? 98--
//? 99--
//? 100--
//? 101--
//? 102--
//? 103--
//? 104--
//? 105--
//? 106--
//? 107--
//? 108--
//? 109--
//? 110--
//? 111--
//? 112--
//? 113--
//? 114--
//? 115--
//? 116--
//? 117--
//? 118--
//? 119--
//? 120--
//? 121--
//? 122--
//? 123--
//? 124--
//? 125--
//? 126--
//? 127--
//? 128--
//? 129--
//? 130--
//? 131--
//? 132--
//? 133--
//? 134--
//? 135--
