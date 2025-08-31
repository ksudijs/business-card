const display = document.getElementById('display');

function displayFun(input){
    display.value += input;
}

function calculate (){
    try{
        display.value = eval(display.value)
    }
    catch(error){
        display.value = "Error";
    }
}

function funClear (){
    display.value = "";
}