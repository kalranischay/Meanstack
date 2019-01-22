function compute(opr){
    var result = 0;
    var firstNumber = document.querySelector("#first").value;
    var secondNumber = document.querySelector("#second").value;
    result = calcObject[opr](firstNumber,secondNumber);
    if(opr=='+'){
    result =  add(firstNumber,secondNumber);
    }
    else
    if(opr=='-'){
    result =  sub(firstNumber,secondNumber);
    }
    else
    if(opr=='*'){
    result =  mul(firstNumber,secondNumber);
    }
    else
    if(opr=='/'){
    result =  div(firstNumber,secondNumber);
    }
    document.querySelector("#result").innerHTML = result;   

}