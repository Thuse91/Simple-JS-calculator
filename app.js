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

function sub(){     
    if(previousInput === null){
        document.querySelector(".output").innerHTML -= input.value
        previousInput = parseInt(input.value);
    } else {
       document.querySelector(".output").innerHTML = previousInput - parseInt(input.value)
       previousInput -= parseInt(input.value);
    }
}

function mult(){     
    if(previousInput === null){
        document.querySelector(".output").innerHTML *= input.value
        previousInput = parseInt(input.value);
    } else {
       document.querySelector(".output").innerHTML = previousInput * parseInt(input.value)
       previousInput *= parseInt(input.value);
    }
}

function div(){     
    if(previousInput === null){
        document.querySelector(".output").innerHTML /= input.value
        previousInput = parseInt(input.value);
    } else {
       document.querySelector(".output").innerHTML = previousInput / parseInt(input.value)
       previousInput /= parseInt(input.value);
    }
}

function mod(){     
    if(previousInput === null){
        document.querySelector(".output").innerHTML %= input.value
        previousInput = parseInt(input.value);
    } else {
       document.querySelector(".output").innerHTML = previousInput % parseInt(input.value)
       previousInput %= parseInt(input.value);
    }
}

function neg(){     
    if(previousInput === null){
        document.querySelector(".output").innerHTML = input.value
        previousInput = parseInt(input.value);
    }else if (previousInput > 0)
        { document.querySelector(".output").innerHTML = -Math.abs(previousInput)       
    }else {
        console.log("fail")
    }
}


function pos(){     
    if(previousInput === null){
        document.querySelector(".output").innerHTML = input.value
        previousInput = parseInt(input.value);
    }else if (previousInput >= -1)
        { document.querySelector(".output").innerHTML = Math.abs(previousInput)       
    }else {
        console.log("fail")
    }
}

function cinput(){
    document.querySelector(".input").value = "";
    console.log("Cleared input")
}

function reset(){
    previousInput = null;
    document.querySelector(".input").value = "";
    document.querySelector(".output").innerHTML = "";
    console.log("Cleared input+output")
}