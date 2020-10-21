function compute(operator){
    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);

    if (operator == "+"){
        document.getElementById("result").innerHTML = add(a, b);
    }
    else if (operator == "-"){
        document.getElementById("result").innerHTML = subtract(a, b);
    }   
}

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}