// ! Document Object Model (DOM)
// It is tree like represention of our HTML document.
// Here, each tag is known as Node.
// DOM is responsible for making our webpage innteractive and dynamic.

// ! DOM Selectors
//* 1) document.getElementById("")

// let ele1 =document.getElementById("box")
// console.log(ele1); 
// ele1.style.backgroundColor = "yellow";

//* 2) document.getElementsByClassName("")

// let containers = document.getElementsByClassName("container")
// console.log(containers); // HTMLCollection(3) [article.container, article.container, article.container]

//todo HTMLCollection is an impure array
// console.log(Array.isArray(containers)); // false

//* 3) document.getElementsByTagName()

//  let elements = document.getElementsByTagName("div")
//  console.log(elements); // HTMLCollection(3) [div, div, div]

//* 4) document.querySelector()

//? priority :- Id > Class > Tag

// let ele2 = document.querySelector("div,#box, container")
// console.log(ele2);

//* 5) document.querySelectorAll()

// let val = document.querySelectorAll("div")
// console.log(val); // NodeList(3) [div, div, div]

// //todo NodeLIst is an impure array
// console.log(Array.isArray(val)); // false

// ? Important Questions
// what is events in DOM
// what is dom manipulation 
// what is dom
// Slectors in dom and differnce 
// whta is DOM eventPropagation

//! DOM MANNIPULATION

// const mainTag = document.querySelector("#main-container")

// const h3Tag = document.createElement("h3")
// const pTag = document.createElement("p")
// const aTag = document.createElement("a")

// aTag.href =" https://www.myntra.com";
// aTag.target = "_blank";

// h3Tag.textContent ="Hello World";
// pTag.innerHTML ="hii i am <em>Pargraph tag</em> ";
// aTag.textContent ="Myntra";

// console.log(h3Tag); 
// console.log(pTag);
// console.log(aTag);

// mainTag.append(h3Tag,pTag,aTag);

//! EVENTS : Action performed by user 
// * Ex- click , scroll , ddbclick , load , mouseenter , mouseout , mousemove.....etc

//! 2 WAYS TO APPLY EVENT
//* 1) using event attribute

// function singleClick(){
//     console.log("btn clicked once");
// }
//  function doubleClick(){
//     console.log("btn clicked twice");
//  }

//  function hoverBtn(){
//     console.log("hiiii")
//  }

//* 2) using addEventListener("event" , callbackFn)method <----RECOMMENDED

// const h3Tag = document.createElement("h3");
// h3Tag.textContent = "Click here";

// h3Tag.addEventListener("click" , () => {
//     console.log("Hiiii");
//     h3Tag.style.backgroundColor = "lightblue"
// });
// document.body.append(h3Tag);


//* ex-
// const box = document.querySelector("#box")
// console.log(box);

// box.addEventListener("click" , () =>{
//     console.log("i am div");
// });


//! RAINBOW TASK 
const elements = document.querySelectorAll("section")
console.log(elements);

elements.forEach((x) => {
    x.addEventListener("mouseenter" , () => {
        x.style.backgroundColor = x.textContent;
    });

    x.addEventListener("mouseout" , () => {
        x.style.backgroundColor = "white";
    })
})
