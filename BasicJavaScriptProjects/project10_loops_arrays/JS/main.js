function Call_Loop(){ // basic while loop
    var loop_i = 0

    while (loop_i < 5){
        document.getElementById("loop").innerHTML += loop_i
        loop_i++
    }

    var string = "Hello, World"; //counts length of string
    var length = string.length;
    document.getElementById("loop").innerHTML += length
}

function for_loop(){ // creates a for loop to print everything in the list
    var list = ["flute", "clarenet", "trombone", "saxephone", "trumpet", "Bass", "etc"]
    for(var i=0; i<list.length;i++){
        document.getElementById("listofinstruments").innerHTML += list[i] + "<br>";
    }
}

function cat_pics(){ // stores data in an array and calls a specific index
    var Cat_Picture=[];
    Cat_Picture[0]="sleeping"
    Cat_Picture[1]="playing"
    Cat_Picture[2]="eating"
    Cat_Picture[3]="Purring"
    document.getElementById("Cat").innerHTML ="this ia a picture of a cat " +Cat_Picture[1]
}

function constant_function(){ // tests the const functionality
    const car = {type:"sedan",color:"white",year:"2014"}
    car.price = "$2"
    car.year = "2012"
    document.getElementById("Constant").innerHTML = "The car is a " + car.year + " " + car.type + " valued at " + car.price
}

function let_function(){ // tests the let functionality
    x = 5
    document.getElementById("Let").innerHTML += x +"<br>"
    {
        let x = 4
        document.getElementById("Let").innerHTML += x + "<br>"
    }
    document.getElementById("Let").innerHTML += x

}

function BIRD(){ //used let to create an object
    let bird = {
    species: "eagle ",
    color: "red ",
    age: "4 ",
    description: function(){ // return value of string when description is called
        return "this is an " + this.species + "and is " + this.color +"in color and is " + this.age + "years old"
    }
    }
    document.getElementById("bird").innerHTML = bird.description()
}
