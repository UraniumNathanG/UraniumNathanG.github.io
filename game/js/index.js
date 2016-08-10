function game() {

var question = prompt("You are starting to play a pokemon tcg game and you have a water type pokemon card and the opponent has a fire type pokemon, will you attack or end your turn. Choices: Attack or End. First letter is capital");
  
if (question === "End") {
  alert("You were safe from getting your pokemon defeated. Continue");
} else {
  alert("The opponent use his trainer card to destroy your pokemon and he wins the game. Start over.");
}
  
alert("If you are successful continue. If you failed, then start over.");

var question2 = prompt("You successfuly avoided the trap and your opponent is going to attack your pokemon. Do you want to use your trainer card? Choices: Yes or No. First letter is capital");
if (question2 === "Yes") {
  alert("The trainer card negated the attack. You're monster is safe. Continue");
} else {
  alert("Game Over, you lost. Start over.");

  alert("If you are successful continue. If you failed, then start over.");
}

var question3 = prompt("Now it is your turn and you drew a really good  pokemon card. Do you want to substitute your active monster now with your good monster?  Choices: Yes or No. First letter is capital");
  if (question3 === "Yes") {
    alert("Great, now you have the advantage. Continue");
  } else {
    alert("You will lose the game. Start Over.");
    alert("If you are successful continue. If you failed, then start over.");
} 

var question4 = prompt("Now is your chance to attack, but you also have a trainer card to defeat the opposing monster. Will you attack, or use the trainer card?  Choices: Attack or Trainer. First letter is capital");
  if (question4 === "Attack") {
      alert("you defeated the opponents monster, you won the game.");
  } else {
    alert("Opponent negated the trainer card and won the game. Start Over.");
    alert("If you are successful continue. If you failed, then start over.");
} 
var question5 = prompt("Your opponent started to rage and punch you, what will you do? Choices: Block or Counter . First letter is capital");
if (question5 === "Block") {
  alert("You were safe and the security guards carried your opponent away. you recieved your medal for winning. Congratulations.");
} else {
  alert("You are in the hospital. Start over.");
}

    
}