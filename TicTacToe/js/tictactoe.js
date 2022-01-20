// this keeps track of active player
let activePlayer = 'X'
//tracks moves
let selectedSquares = []

//function for X O placement
function placeXOrO(squareNumber){
    if (!selectedSquares.some(Element=>Element.includes(squareNumber))){
        let select = document.getElementById(squareNumber);
        if(activePlayer==='X'){
            select.style.backgroundImage = 'url("images/x.png")'
        } else{
            select.style.backgroundImage = 'url("images/o.png")'
        }
        selectedSquares.push(squareNumber + activePlayer)
        checkWinConditions()
        if(activePlayer==='X'){
            activePlayer = 'O'
        } else{
            activePlayer = 'X'
        }
    }

    //placement sound
    audio('./media/place.mp3')
    
    //checks to see if it is computers turn
    if(activePlayer==='O'){
        disableClick();
        setTimeout(function(){computersTurn()},1000)
    }
}

// Computer selects random square

function computersTurn(){
    let success = false;
    let pickASquare;
    while(!success){
        pickASquare = String(Math.floor(Math.random()*9))
        if(placeXOrO(pickASquare)){
            placeXOrO(pickASquare)
            success = true
        }
    }
}

//Checks win condition
function checkWinConditions(){
    if      (arrayIncludes('0X','1X','2X')){drawWinLine(50,100,558,100)}
    else if (arrayIncludes('3X','4X','5X')){drawWinLine(50,100,558,100)}
    else if (arrayIncludes('6X','7X','8X')){drawWinLine(50,100,558,100)}
    else if (arrayIncludes('0X','3X','6X')){drawWinLine(50,100,558,100)}
    else if (arrayIncludes('1X','4X','7X')){drawWinLine(50,100,558,100)}
    else if (arrayIncludes('2X','5X','8X')){drawWinLine(50,100,558,100)}
    else if (arrayIncludes('6X','4X','2X')){drawWinLine(50,100,558,100)}
    else if (arrayIncludes('0X','4X','8X')){drawWinLine(50,100,558,100)}
    else if (arrayIncludes('0O','1O','2O')){drawWinLine(50,100,558,100)}
    else if (arrayIncludes('3O','4O','5O')){drawWinLine(50,100,558,100)}
    else if (arrayIncludes('6O','7O','8O')){drawWinLine(50,100,558,100)}
    else if (arrayIncludes('0O','3O','6O')){drawWinLine(50,100,558,100)}
    else if (arrayIncludes('1O','4O','7O')){drawWinLine(50,100,558,100)}
    else if (arrayIncludes('2O','5O','8O')){drawWinLine(50,100,558,100)}
    else if (arrayIncludes('6O','4O','2O')){drawWinLine(50,100,558,100)}
    else if (arrayIncludes('0O','4O','8O')){drawWinLine(50,100,558,100)}

    // if game results in tie
    else if(selectedSquares.length>=9){
        audio('./media/tie.mp3')
        setTimeout(function(){resetGame()},1000)
    }

    // creates array used in check win conditions
    function arrayIncludes(squareA, squareB, squareC){
        const a= selectedSquares.includes(squareA)
        const b= selectedSquares.includes(squareB)
        const c= selectedSquares.includes(squareC)
        if(a===true && b===true && c===true) {return true}
    }
}

//allows for computer to take turn
function disableClick(){
    body.style.pointerEvents ='none'
    setTimeout(function(){body.style.pointerEvents='auto'}, 1000);
}

//allows for audio
function audio(audioURL){
    let audio = new Audio(audioURL)
    audio.play()
}