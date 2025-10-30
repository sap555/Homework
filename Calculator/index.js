//Calculator Program

const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += value;
}

function clearDisplay(){
    display.value = "";
}

function calculation(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}