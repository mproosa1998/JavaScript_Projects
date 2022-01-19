function Vote_Function(){
    var age, can_vote;
    age=document.getElementById("Age").value;
    can_vote = (age < 18) ? "You are too young":"You are old enough";
    document.getElementById("Vote").innerHTML = can_vote+" to vote."
}