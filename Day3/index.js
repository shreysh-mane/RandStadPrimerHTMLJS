// Truthy and Falsy values.


// Funtion declaration
function demo(){

if(null){
    console.log("HI"); 
}
}

// false, 0, ""
// true, 10, -10, "Yash"


demo();



// Function expression / Anonymous function:

var funExpre = function (a){

    console.log(a);

}

// console.log(funExpre);
funExpre(10);


// Arrow Function

var arrowFun = (a,b)=> a+b;

var arrowFun2= (a,b)=>{
    var sum=a+b;
    return sum;
}

// console.log(funExpre);
console.log(arrowFun(10,20));
console.log(arrowFun2(10,20));