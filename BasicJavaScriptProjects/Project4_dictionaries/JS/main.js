function my_dictionary(){ //fun decleration
    var gumballs = { // creates dictionary gumball and defines the kvp
        red: "strawberry",
        blue: "blueraspberry",
        yellow: "banana",
        green: "greenapple",
        pink: "pinklemonade"
    };
    delete gumballs.red // deletes the kvp red from gumballs
    document.getElementById("dictionary").innerHTML = gumballs.red // attempts to out put the red value
}