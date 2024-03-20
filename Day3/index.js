// Truthy and Falsy values.


// Funtion declaration
// function demo(){

// if(null){
//     console.log("HI"); 
// }
// }

// // false, 0, ""
// // true, 10, -10, "Yash"


// demo();



// // Function expression / Anonymous function:

// var funExpre = function (a){

//     console.log(a);

// }

// // console.log(funExpre);
// funExpre(10);


// // Arrow Function

// var arrowFun = (a,b)=> a+b;

// var arrowFun2= (a,b)=>{
//     var sum=a+b;
//     return sum;
// }

// // console.log(funExpre);
// console.log(arrowFun(10,20));
// console.log(arrowFun2(10,20));


// Default Parameters


// function demoPara(no1,no2=0){
//     console.log(no1);  // 10
//     console.log(no2); // undefined


//     var sum=no1+no2;
//     console.log(sum);
// }

// demoPara(10);   



// REST Operator ...

// function sum(...numbers){
//  console.log(numbers); //30
//     var sum=0;
 
//     for (let index = 0; index < numbers.length; index++) {
//         sum += numbers[index];
    
//     }
//     console.log(sum);
// }

// sum(10,10);
// sum(10,20,40);
// sum(10,20,30,40);


// Spread Operator ...

function demoSpread(a,b,c){
    console.log(a);
    console.log(b);
    console.log(c);
}

var arr=[10,20,30];
demoSpread(...arr);


var arr2 = [...arr];
arr[0]=1;
console.log(arr2);