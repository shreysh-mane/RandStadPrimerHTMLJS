
// console.log(document);

// console.log(document.body);

// console.log(document.body.children);
// console.log(document.body.childNodes);


// Element Selectors

// var eleHeading1= document.getElementById("head1");
// var eleHeading2= document.getElementById("head2");
// console.log(eleHeading1);

//Change content inside an element
// innerHTML

// var contentEleHeading1= eleHeading1.innerHTML;
// console.log(contentEleHeading1);
// eleHeading1.innerHTML="<ul><li>Yash</li></ul>";



// textContent
// var contentEleHeading2= eleHeading2.textContent;
// console.log(contentEleHeading2);
// eleHeading2.textContent="Bye";

// Check diff between innerHTML and textContent.

// var classDiv=document.getElementsByClassName("div2");
// console.log(classDiv);
// classDiv[0].innerHTML="Shreysh";

//
// CSS selectors
// #id
// .class
// tagName
// var demoQuery= document.querySelector(".div2");
// console.log(demoQuery);

// var demoQueryAll= document.querySelectorAll(".div2");
// console.log(demoQueryAll[0]);

// 2 ways to attach an event to an element
// 1. Directly add event to that html element
// 2. Add evenlistener in JS


// function changeText(){
//     console.log("Clicked");  
//     console.log(event);
//     console.log(event.type);
//     console.log(event.target);  
//     event.target.innerHTML="Bye";

// }



// Adding event listeners
// var head2Ele = document.getElementById("head2");
// console.log(head2Ele);


// function handler2(){

//     head2Ele.innerHTML="Bye";
// }



// head2Ele.addEventListener('click',handler2);







    