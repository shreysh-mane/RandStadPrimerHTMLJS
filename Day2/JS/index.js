

// Declare Variables
// var, let, const

// var no1=10;
// let no2=15;

// const no3=20;


// console.log(window);

// no1="Shreysh";
// no2=35;


// no3=40;

// console.log(no1);
// console.log(no2);
// console.log(no3);



// Datatyeps in JS

// var num=12;
// var str1="String";
// var st2='String';
// template literal
// var st3=`I am Shreysh`;

// var userName="Shreysh";

// console.log("Hello I am " + userName + " How are you?");

// console.log(`Hello I am   ${userName}   How are you?`);

// String initialization
// var st4= new String("stIni");
// console.log(st4);

// var boolean=true;



// var arr=[1,2,3,4,"Shreyh",{name:"Yash",age:24}];
// console.log(arr[1]);

// Objects
// var obj={
//     name:"Sham",
//     age:40
// }
// console.log(obj.name);

// Undefined

// var un=110;
// Decaration
// var un;
// console.log(un);
// // Assignment
// un=110;
// console.log(un);



// Null
// console.log(obj);
// obj=null;
// console.log(obj);

// var nStr="10"
// var n=parseInt(nStr);
// console.log("typeof: "+ (typeof nStr));


// console.log(2+2);    // 4
// console.log(2 + "2");  // "22"
// console.log(2-2);    // 0
// console.log("2" - 2);  //  0
// console.log(true + true);   // 2
// console.log(false + true); // 1    

// console.log("A" + 3); //A3  
// console.log("A" - 3); //NaN


// "use strict";
var A=10;
let B=50;
// console.log("before fun: " + a); 
function abc(){
    // var a=5;
    // console.log("Inside fun: " + a); 

    if(true){
        let b=20;
        var a=10;
        console.log("Inside Block a: "+ a);
        // console.log("Inside Block b: "+ b);  
    }
    console.log("Outside Block a: "+ a); 
    // console.log("Outside Block b: "+ b); 
 
}

abc();
console.log("after fun a: " + a); 