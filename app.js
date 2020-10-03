var input = document.querySelector(".input");
let previousInput = null;

function add(){     
    if(previousInput === null){
        document.querySelector(".output").innerHTML += input.value
        previousInput = parseInt(input.value);
    } else {
       document.querySelector(".output").innerHTML = previousInput + parseInt(input.value)
       previousInput += parseInt(input.value);
    }
}