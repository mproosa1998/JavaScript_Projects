var x = 10
function fun1(){ //uses global variable x
    document.write(4+x)
}
function fun2(){ // uses local variable y
    var y=20
    document.write(5+y)
}

function fun3(){ // attempts to use local variable y from fun2
    document.write(y)
} 

fun1() // fun calls
fun2()
fun3()

function morningOrNight(){ // uses if to see if it is morning or night
    if(new Date().getHours() <12){
        document.getElementById("time").innerHTML = "It Is Morning"
    }
    else{
        document.getElementById("time").innerHTML = "It is Night"
    }
}

function SecretWord(){ // takes input from user, checks to see if it is correct and returns a response
    if(document.getElementById("input").value == "Secret Word"){
        document.getElementById("result").innerHTML = "You Successfully Inputed Secret Word"
    }
    else{
        document.getElementById("result").innerHTML = "That is the worng Input. Try Again"
    }
}

function Time_Function(){ //checks time and sees if it is morning afternoon or evening
    var Time = new Date().getHours();
    var Reply;
    if(Time<12 ==Time>0){
        Reply = "It is morning Time!"
    }
    else if(Time>=12 == Time <18){
        Reply = "It is Afternoon."
    }
    else {
        Reply = "it is evening time"
    }
    document.getElementById("Time_of_day").innerHTML = Reply
}