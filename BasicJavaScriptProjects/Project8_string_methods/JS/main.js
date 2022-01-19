function letsConcat(){ // concatinated multiple variables without + sign
    var1 = "first Half of sentance plus"
    var2 = " Second Half of sentance "
    var3 = "a whole sentance"
    document.getElementById("Concatination").innerHTML = var1.concat(var2,var3)
}

function letsSlice(){ // returns value between indexs of slice
    sentance = " Lets go out and play today"
    slice = sentance.slice(17,21)
    document.getElementById("Slice").innerHTML = slice
}

function Uppercasing(){ // turns all chars to uppercase
    var1 = "tiny letters become big letters"
    document.getElementById("toUp").innerHTML = var1.toUpperCase()

}

function Searching(){ //returns the index at where the search query begins
    var1 = "an apple a day keeps the doctor away"
    document.getElementById("found").innerHTML = var1.search("app")
}

function numtostring(){ // turns var2 into a string
    var1 = "this number is now a string "
    var2 = 3
    document.getElementById("numtostring").innerHTML = var1 + var2.toString()
}

function precision(){ // returns up to 15 digits of value
    var1 = 1234567890.0987654321
    document.getElementById("precision").innerHTML = var1.toPrecision(15)
}

function fixed(){ // returns variable at hundredths place
    var1 = 1234567890.0987654321
    document.getElementById("fixed").innerHTML = var1.toFixed(2)
}

function A_Value(){ //returns primitive value of variable
    var1 = 1234567890.0987654321
    document.getElementById("value").innerHTML = var1.valueOf()
}