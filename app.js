const roll = document.getElementById("roll");
const score = document.getElementById("score");
const win_loose =document.getElementById("win_loose");
const hit1 = document.getElementById("hit1");

let total_score = 0;
let turns = 0;


// dice roll - function

function diceRoll(){
    let diceRoll = [1,2,3,4,5,6];
    let rolled = diceRoll[Math.floor(Math.random()*6)];
    return rolled;
}

// Winner - function

function winner(){
    if(total_score >= 21){
        win_loose.textContent = "You Won!";
        roll.textContent = "Play Again?";
        

    }

}

// Rolled 1 - function

function rolled1(){
    win_loose.textContent = "You Lost!"
    total_score = 0;

}

// Press Enter - event

roll.addEventListener("keypress",(e)=>{
    e.key = "Enter"
    if(roll.textContent == "Roll"){
        hit1.style.visibility = "hidden";
        let diceRolled = diceRoll();
        dice.src = `images/dice${diceRolled}.png`;
        total_score += diceRolled;
        score.textContent = total_score;
        win_loose.textContent = `You rolled ${diceRolled}`
        if(diceRolled !== 1){
            winner();
        }else{
            rolled1();
            roll.textContent = "Try Again?";
        }
    }else{
        roll.textContent = "Roll";
        total_score = 0;
        score.textContent = 0;
        win_loose.textContent = "Score 21 To Win"
        hit1.style.visibility = "visible";
    }    

})

// Click Roll button - event

roll.addEventListener("click",()=>{
    if(roll.textContent == "Roll"){
        hit1.style.visibility = "hidden";
        let diceRolled = diceRoll();
        dice.src = `images/dice${diceRolled}.png`;
        total_score += diceRolled;
        score.textContent = total_score;
        win_loose.textContent = `You rolled ${diceRolled}`
        if(diceRolled !== 1){
            winner();
        }else{
            rolled1();
            roll.textContent = "Try Again?";
        }
    }else{
        roll.textContent = "Roll";
        total_score = 0;
        score.textContent = 0;
        win_loose.textContent = "Score 21 To Win"
        hit1.style.visibility = "visible";
    }    

})