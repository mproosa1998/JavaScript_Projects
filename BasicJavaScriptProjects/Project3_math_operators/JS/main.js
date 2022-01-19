function ADD(){ // addition
    sum = 3+3;
    document.getElementById("Math").innerHTML = "Total: " + sum;
}

function SUB(){ // subtraction
    dif = 3-3;
    document.getElementById("Math").innerHTML = "Total: " + dif;
}

function MULT(){ // multiplication
    mult = 3*3;
    document.getElementById("Math").innerHTML = "Total: " + mult;
}

function DIV(){ //division
    div = 3/3;
    document.getElementById("Math").innerHTML = "Total: " + div;
}

function lotsOMath(){ // uses all 4 basic operations
    total = 3+3-3*3/3;
    document.getElementById("Math").innerHTML = "Total: " + total;
}

function MOD(){ // modular
    mod = 25 % 6;
    document.getElementById("Math").innerHTML = "Remainder of 25 % 6: " + mod;
}

function NEG(){  // negation
    ned = 3;
    document.getElementById("Math").innerHTML = "Total: " + -neg;
}

function INC(){ // increment
    inc = 3;
    document.getElementById("Math").innerHTML = "Total: " + ++inc;
}

function DEC(){  // decrement
    dec = 3;
    document.getElementById("Math").innerHTML = "Total: " + --dec;
}


alert(Math.round(Math.random()*100)) //alert window with random rounded int