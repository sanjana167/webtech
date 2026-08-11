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
// * number
// var a1 = 10.9;
// console.log(a1, typeof a1); // 10.9 number

// * string
// var a2 = "Hello";
// console.log(a2, typeof a2); // Hello string

// *boolean
// var a3 = true;
// console.log(a3, typeof a3); // true boolean

// * undefined
// var a4;
// console.log(a4, typeof a4); // undefined undefined

// * null
// var a5 = null;
// console.log(a5, typeof a5); // null object

// * bigint : (-2^53 - 1 to 2^53 - 1)
// var a6 = 9n;
// console.log(a6, typeof a6);

// * symbol
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

// ? let x; //! error

// x = 100;
// console.log(x); // 100

//  ? let y = 200 //! error

// //! const example
// const LIMIT = 100;
// console.log(LIMIT);

//! HOISTING : Hoisting is JavaScript's default behavior of lifting variable and function declarations to the top of their current scope before the code actually runs.

// console.log(a); // ud <--- due to hoisting
// var a = 10;
// console.log(a); // 10

// * console.log(b); //! Cannot access 'b' before initialization
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
let sum = function (n1 = 0, n2 = 0) {
  console.log(arguments);
  console.log(n1 + n2);
};

sum(10, 20, 30);