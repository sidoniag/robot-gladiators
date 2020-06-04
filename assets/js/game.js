//Game States
// "WIN" - Player robot has defeated all enemy robots
//  * Fight all enemy robots
//  * Defeat each enemy robot
// "LOSE" - Player robot's health is zero or less

var playerName = window.prompt("What is your robot's name?")
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
//console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;


//console.log(enemyNames);
//console.log(enemyNames[0]);
//console.log(enemyNames[1]);
//console.log(enemyNames[2]);
//console.log(enemyNames.length);



var fight = function(enemyNames) {
  // fight function statements
  }

  for(var i = 0; i < enemyNames.length; i++) {
   console.log(enemyNames[i]);
   console.log(i);
   console.log(enemyNames[i] + " is at " + i + " index");
}
  
  //Alert users that they are starting the round
  window.alert("Welcome to Robot Gladiators!");

  //Ask user if they want to fight
  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose. ");

  //Log a result to question
  console.log(promptFight);
  
  //if player choses to fight, then fight
  if (promptFight === "fight" || promptFight === "FIGHT") {

  //Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that result to update the value
  enemyHealth = enemyHealth - playerAttack;

  //Log a resulting message to the console so we know that it worked.
  console.log(
    playerName + " attacked " + enemyNames + " . " + enemyNames + " now has " + enemyHealth + " health remaining."
  );

  // check enemy's health
  if (enemyHealth <= 0) {
    window.alert(enemyNames + " has died!");
  }
  else {
    window.alert(enemyNames + " still has " + enemyHealth + " health left.");
  }

  //Subtract the value of 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable.
    playerHealth = playerHealth - enemyAttack;

  //Log a resulting messgae to the console so we know that it worked.
  console.log(
    enemyNames + " attacked " + playerName + " . " + playerName + " now has " + playerHealth + " health remaining."
  )

  //Check player's health
  if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
  }
  else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
  }

  //if player choses to skip
} else if (promptFight === "skip" || promptFight === "SKIP") {
  // confirm user wants to skip
  var confirmSkip = window.confirm("Are you sure you'd like to quit?");

  //if yes (true), leave fight
  if (confirmSkip) {
    window.alert(playerName + " has decided to skip this fight. Goodbye!");
    // subtract money from playerMoney for skipping
    playerMoney = playerMoney - 2;
  }
  // if no (false), ask question again by running fight() again
  else {
    fight();
  }
  window.alert(playerName + " has chose to skip the fight!");
} else {
  window.alert("You need to pick a valid option. Try again!");
} 


function newFunction() {
 enemyNames[0];
}

for(var i = 0; i < enemyNames.length; i++) {
 fight(enemyNames[i]);
 }

