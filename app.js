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
    document.querySelector(".input").value = "";
}

function sub(){     
    if(previousInput === null){
        document.querySelector(".output").innerHTML -= input.value
        previousInput = parseInt(input.value);
    } else {
       document.querySelector(".output").innerHTML = previousInput - parseInt(input.value)
       previousInput -= parseInt(input.value);
    }
    document.querySelector(".input").value = "";
}

function mult(){     
    if(previousInput === null){
        document.querySelector(".output").innerHTML *= input.value
        previousInput = parseInt(input.value);
    } else {
       document.querySelector(".output").innerHTML = previousInput * parseInt(input.value)
       previousInput *= parseInt(input.value);
    }
    document.querySelector(".input").value = "";
}

function div(){     
    if(previousInput === null){
        document.querySelector(".output").innerHTML /= input.value
        previousInput = parseInt(input.value);
    } else {
       document.querySelector(".output").innerHTML = previousInput / parseInt(input.value)
       previousInput /= parseInt(input.value);
    }
    document.querySelector(".input").value = "";
}

function mod(){     
    if(previousInput === null){
        document.querySelector(".output").innerHTML %= input.value
        previousInput = parseInt(input.value);
    } else {
       document.querySelector(".output").innerHTML = previousInput % parseInt(input.value)
       previousInput %= parseInt(input.value);
    }
    document.querySelector(".input").value = "";
}



function reset(){
    previousInput = null;
    document.querySelector(".input").value = "";
    document.querySelector(".output").innerHTML = "";
    console.log(input)
}