let display = document.getElementById("display");
let buttons=document.querySelectorAll(".btn");
let clear=document.getElementById("clear");
let equal=document.getElementById("equals");
let deleteBtn=document.getElementById("delete");
let currentInput="";
buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
        currentInput+=button.innerText;
        display.value=currentInput;
    });
});
equal.addEventListener("click",()=>{
    try{
        currentInput=eval(currentInput);
        display.value=currentInput;
    }
    catch(error){
        display.value="Error";          
    
    }
});
clear.addEventListener("click",()=>{
    currentInput="";
    display.value=currentInput;
});
deleteBtn.addEventListener("click",()=>{
    currentInput=currentInput.slice(0,-1);
    display.value=currentInput;
});
