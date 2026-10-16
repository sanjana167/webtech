//! TYPES OF PRINTING STATEMENTS
// 1) console.log()
// 2) document.write() <------ deprecate
// 3) document.writeln() <---- deprecate

//! TOKEN :  Smallest unit of any programming language
// There are 4 types of tokens

// 1) keywords : are the reserved words. ex: for, if , class, etc

// 2) identifier : name given to variables, methods, class, functions

// 3) literals :  values that are stored in a variable

// 4) operator :  symbols used to perform some specific operations

//! DATATYPES : Which type of data we store in a variable
// There are 2 types:

//! 1) PRIMITIVE : (immutable | call by value )
// // number
// var a1 = 10.9;
// console.log(a1, typeof a1); // 10.9 number

// // string
// var a2 = "Hello";
// console.log(a2, typeof a2); // Hello string

// // boolean
// var a3 = true;
// console.log(a3, typeof a3); // true boolean

// // undefined
// var a4;
// console.log(a4, typeof a4); // undefined undefined

// // null
// var a5 = null;
// console.log(a5, typeof a5); // null object

// // bigint : (-2^53 - 1 to 2^53 - 1)
// var a6 = 9n;
// console.log(a6, typeof a6);

// // symbol
// var s1 = Symbol("Hello");
// var s2 = Symbol("Hello");

// console.log(s1, typeof s1); // Symbol(Hello) 'symbol'
// console.log(s2, typeof s2); // Symbol(Hello) 'symbol'

// console.log(s1 == s2); // false

// console.log(10 == "10"); // true
// console.log(10 === "10"); // false

//! 2) NON-PRIMITIVE : (mutable | call by reference )
// array
// object
// function

//! MUTABLE VS IMMUTABLE
// var arr = [10, 20, 30];
// arr[0] = 100;
// console.log(arr); // [100, 20, 30]

// var str = "Hello";
// str[0] = "X";
// console.log(str); // Hello

//!  TYPES OF VARIABLES
// 1) GLOBAL VARIABLE
// 2) LOCAL VARIABLE

//! WAYS OF DECLARING A VARAIBLE IN JS
// 1) var
// 2) let   ---> introduced in ES6
// 3) const ---> introduced in ES6

//! DIFFERENCE BTW var , let AND const
//! var example

// var a;
// console.log(a); // ud

// a = 10;
// console.log(a); // 10

// var b = 20;
// console.log(b); // 20

// var a;
// console.log(a);

// a = 100;
// console.log(a); // 100

// var b = 200;
// console.log(b); // 200

//! let example
// let x;
// console.log(x); // ud

// x = 10;
// console.log(x); // 10

// let y = 20;
// console.log(y); // 20

// // let x; //! error

// x = 100;
// console.log(x); // 100

// // let y = 200 //! error

// //! const example
// const LIMIT = 100;
// console.log(LIMIT);

//! HOISTING : Hoisting is JavaScript's default behavior of lifting variable and function declarations to the top of their current scope before the code actually runs.

// console.log(a); // ud <--- due to hoisting
// var a = 10;
// console.log(a); // 10

// console.log(b); //! Cannot access 'b' before initialization
// let b = 20
// console.log(b); // 20

// //! SCOPES
// var a1 = 10; //     global variables - global scope
// let a2 = 20; //     global variables - script scope <--- TDZ
// const a3 = 30; //   global variables - script scope <--- TDZ
// console.log(a1, a2, a3);

// if (100 > 10) {
//   var b1 = 100; //  global variables - global scope
//   let b2 = 200; //  local variable - block scope
//   const b3 = 300; //    local variable - block scope
// }
// console.log(b1); // 100

// function demo() {
//   var c1 = 1000; //  local variable - local scope || function scoped
//   let c2 = 2000; //  local variable - local scope
//   const c3 = 3000; //    local variable - local scope
// }
// demo();

//! FUNCTIONS

//! 1) NAMED FUNCTION : Function which has name
// NOTE :- Function hoisting is only possible in named function

// greet(); //<-- due to Hoisting

// function greet() {
//   console.log("Welcome");
// }

// greet();

//! GEC
// console.log("Start");
// console.log(a);
// student();
// var a = 10;
// console.log(a);
// function student() {
//   let b = 20;
//   console.log(b);
// }
// student();
// console.log(a);
// console.log("end");

//! 2) ANONYMOUS FUNCTION : function without name
// function (){}

//! 3) FUNCTION EXPRESSION : used to call anonymous function
// let f1 = function () {
//   console.log("Hii");
// };
// f1()

//! 4) FUNCTION WITH ARGUEMENTS AND PARAMETERS
// let sum = function (n1 = 0, n2 = 0) {
//   console.log(arguments);
//   console.log(n1 + n2);
// };

// sum(10, 20, 30);

//! "arguements" EXAMPLE
// function demo(a, b, ...c) {
//   console.log(a, b, c);

//   console.log(arguments); // Array-Like Object
//   console.log(Array.isArray(arguments)); // false

//   console.log(Array.isArray(c)); // true
// }
// demo(10, 20, 30, 40, 50);

//! 5) NESTED FUNCTION
// CLOSURE - it is a temporary memory which is created whenever child func tries to access parent's func property

// function Parent() {
//   let money = 50000;
//   let house = "Home";
//   let car = "Toyota";
//   console.log(money);

//   function Child() {
//     let saving = 5000;
//     console.log(saving, money); // due to closure
//   }

//   Child();
// }

// Parent();

//! 6) RETURN TYPE FUNCTION
// function sum(n1 = 0, n2 = 0) {
//   let result = n1 + n2;
//   return result; // 25
// }
// let val = sum(5, 20);
// console.log(val);

//! 7) HIGHER ORDER FUNCTION - HOF
// 1) A function should return another function
// function counter() {
//   let count = 0;

//   function child() {
//     count++;
//     console.log("count is", count);
//   }

//   return child;
// }
// let c1 = counter();
// c1();

// 2) A function should accept another function as arguement

// EXAMPLE----> array.forEach(function(){})

//! CALLBACK : A function which passes as an arguement
// function calculate(x){

// }
// calculate(function(){})

//! 8) IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)
// (function () {
//   console.log("I am IIFE");
// })();

//! 9) ARROW FUNCTION :- es6 ---> shorter syntax
// const f1 = () => {
//   console.log("Arrow function 1");
// };
// f1();

// const f2 = (x) => {
//   console.log("Arrow function 2", x);
// };
// f2(10);

// const f3 = () => console.log("Arrow function 3");
// f3();

// EXPLICIT RETURN
// const f4 = (n1 = 0, n2 = 0) => {
//   return n1 + n2;
// };
// console.log(f4(10, 20));

// IMPLICIT RETURN
// const f5 = (n1 = 0, n2 = 0) => n1 + n2;
// console.log(f5(50, 10));

// const f6 = () => ({ name: "John" });
// console.log(f6());

//! OBJECTS

//! CREATE
const obj1 = {
  firstname: "John",
  lastname: "Doe",
  age: 20,
  isAdmin: false,
  company: "TCS",
};

// //! READ
// console.log(obj1.firstname);

// //! UPDATE
// obj1.age = 24;
// console.log(obj1.age);

// //! ADD NEW KEY
// obj1.salary = 50000;

// //! DELETE
// delete obj1.isAdmin

// console.log(obj1);

//! LOOP OVER AN OBJECT
// for (let i in obj1) {
//   console.log(obj1[i]);
// }

// let student = {
//   fname: "Henry",
//   course: "MERN Stack",
// };

// let x = "fname";
// console.log(student[x]);

//! NESTED OBJECT
// let employee = {
//   fullname: {
//     firstname: "John",
//     lastname: "Doe",
//   },

//   age: 35,
//   address: {
//     city: "Noida",
//     state: "UP",
//     pin: 201301,
//     coordinates: { lat: 9876543212, long: 98765432345 },
//   },
// };

// console.log(employee.fullname.firstname);
// console.log(employee.address.coordinates.lat);

//! DESTRUCTURING
// let user = {
//   fname: "Jane",
//   lname: "Doe",
//   age: 20,
// };

// let { age, fname:firstname, lname, salary:sal = "NA"} = user;
// console.log(age, firstname, lname, sal);

//! NESTED OBJECT DESTRUCTURING
// let user = {
//   name: "John Doe",
//   address: {
//     city: "Noida",
//     state: "UP",
//   },
// };

// let { name , address:{city , state} } = user
// console.log(name);

// console.log(user.address); // {city: 'Noida', state: 'UP'}
// console.log(city, state);

//! ARRAYS :-
// let arr1 = [10, 20, 30, 40, 50];
//           0   1   2   3   4
// console.log(arr1);
// console.log(arr1.length); // 5 <-- property

//! ARRAY METHODS
// let arr1 = [10, 20, 30, 40, 50];
// console.log(arr1); // [10, 20, 30, 40, 50]

//! push() : adds element at the last of an array
// arr1.push(60, 70, 80);
// console.log(arr1); // [10, 20, 30, 40, 50, 60, 70, 80]

//! pop() : removes element from last of an array
// arr1.pop();
// console.log(arr1); // [10, 20, 30, 40, 50, 60, 70]

//! unshift() : adds element at the first of an array
// arr1.unshift(100, 200);
// console.log(arr1); // [100, 200, 10, 20, 30, 40, 50, 60, 70]

//! shift() : removes element from front of an array
// arr1.shift();
// console.log(arr1); // [200, 10, 20, 30, 40, 50, 60, 70]

//! splice(pos , deleteCount , newElements)
// let arr2 = [100, 200, 300, 400, 500];

//!-- ADD
// arr2.splice(2, 0, 250);
// console.log(arr2); // [100, 200, 250, 300, 400, 500];

//!-- DELETE
// arr2.splice(1, 3);
// console.log(arr2); // [100, 500]

//!-- DELETE AND ADD
// arr2.splice(1, 2, "HelloWorld");
// console.log(arr2); // [100, 'HelloWorld', 400, 500]

//! slice(startIndex , endIndex)
// slice always ingores endIndex

//          -4   -3   -2   -1
// let arr3 = [100, 200, 300, 400];

// let val1 = arr3.slice(1, 3);
// console.log(val1); // [200,300]

// let val2 = arr3.slice(-3, -1);
// console.log(val2); // [200,300]

// let val3 = arr3.slice(-3, 3);
// console.log(val3); // [200,300]

let arr4 = [10, 20, 30, 40, 50];

//! forEach(()=>{}) : returns undefined
// let res1 = arr4.forEach((ele, idx, arr) => {
//   // console.log(ele);
//   return ele + 5;
// });
// console.log("forEach --->", res1);

//! map(()=>{}) : returns new array
// let res2 = arr4.map((ele, idx, arr) => {
//   // console.log(ele);
//   return ele + 5;
// });
// console.log("map ---->", res2);

//! filter(()=>{}) : returns new filtered array
// let res3 = arr4.filter((ele, idx, arr) => {
//   return ele > 30;
// });
// console.log("filter ---->", res3);

//! find(()=>{}) : returns single value which satisfy the condition
// let res4 = arr4.find((ele, idx, arr) => {
//   return ele > 30;
// });
// console.log("find ---->", res4);

//! findIndex(()=>{})
// let res5 = arr4.findIndex((ele, idx, arr) => {
//   return ele > 30;
// });
// console.log("find ---->", res5);

//! Promise: A JavaScript Promise is an object representing the eventual completion or failure of an asynchronous operation. It serves as a placeholder for a value that is initially unknown but will be delivered in the future.

// let p1 = fetch("https://dummyjson.com/todos");
// console.log(p1);

// p1.then((resp) => {
//   let p2 = resp.json();
// console.log(p2);

//   p2.then((data) => {
//     console.log(data.todos);
//   });

//   p2.catch((err) => console.log(err));
// });

// p1.catch((err) => {
//   console.log("Something went wrong", err);
// });

//! ASYNC/AWAIT : The modern standard for handling promises cleanly is async/await, which writes asynchronous code that looks and behaves like synchronous code
// async function getTodos() {
//   try {
//     let resp = await fetch("https://dummyjson.com/todos");
//     let data = await resp.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// getTodos();

//! PROMISE RIVISION

// const API = "https://dummyjson.com/todos";
// let p1 = fetch(API);
// console.log(p1);

// p1.then((resp) => {
//   let p2 = resp.json();
//   console.log(p2);

//   p2.then((data) => console.log(data.todos));
//   p2.catch((err) => console.log(err));
// });

// p1.catch((err) => {
//   console.log(err);
// });

//! ASYNC / AWAIT ---> functions

// async function fetchTodosData() {
//   try {
//     let resp = await fetch("https://dummyjson.com/todos");
//     let data = await resp.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// fetchTodosData();

//! TIMER FUNCTIONS
// 1) setInterval(callbackFn , intervalTime)
console.log("Start");

let id = setInterval(() => {
  console.log("Hii");
}, 1000);

// 2) setTimeout(callbackFn , delay)

setTimeout(() => {
  console.log("Byeee");
  clearInterval(id);
}, 8000);

console.log("End");

//! EVENT LOOP
console.log("Start");

setTimeout(function T1() {
  console.log("T1");
}, 5000);

Promise.resolve().then(function P1() {
  console.log("P1");
});

console.log("Hiiii");

setTimeout(function T2() {
  console.log("T2");
}, 2000);

console.log("End");

/*
! Output
Start
Hiiii
End
P1
T2
T1
*/







