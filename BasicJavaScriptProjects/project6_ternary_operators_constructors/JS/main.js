function Vote_Function(){ // checks to see if age meets minimum requirement to vote and then returns a yes or no string
    var age, can_vote;
    age=document.getElementById("Age").value;
    can_vote = (age < 18) ? "You are too young":"You are old enough";
    document.getElementById("Vote").innerHTML = can_vote+" to vote."
}

function Vehicle(Make, Model, Year, Color){  // Defining the class constructor
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red"); // creates three new instances of Vehicle class and defines parameters
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

function myFunction(){ // prints out information about Erik's car using object calls
    document.getElementById("New_and_This").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}

function NestedFunction(){ //prints out the returned value of the nested function
    document.getElementById("Nested_Function").innerHTML = NestFunction()
    function NestFunction(){
        return "Success"
    }
}