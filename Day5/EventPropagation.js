const parentDiv=document.getElementById('parent');
const childDiv=document.getElementById('child');

const bodyE=document.querySelector('body');

function parentHandler(){
    event.stopPropagation();       
    console.log("Parent Got Clicked");
}

function childHandler(){
   
    console.log("Child Got Clicked");
}


function bodyHandler(){
   
    console.log("Body Got Clicked");
}



parentDiv.addEventListener('click',parentHandler,true);
childDiv.addEventListener('click',childHandler,true);
bodyE.addEventListener('click',bodyHandler,true);