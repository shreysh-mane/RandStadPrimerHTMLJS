
var form= document.getElementById("f1");

console.log(form);

function handleForm(){
    event.preventDefault();
    console.log("Hi");
    var fnameEle= document.getElementById("fname");
    console.log(fnameEle.value);
}





form.addEventListener("submit",handleForm);
