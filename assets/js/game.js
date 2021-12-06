var player1 = window.prompt("What is your robot's name?");
var playerhealth = 100;
var playerattack = 12;
var playermoney = 10;

console.log("Players name is: " + player1,"Players Health is " + playerhealth,"Platers attack is " + playerattack);

var enemynames = ["Roberto", "Amy Android", "Robo Trumble"];
var enemyhealth = 50;
var enemyattack = 12;

var fight =  function(enemyname) {
    window.alert("Welcome to Robot Gladiators!");

    var promptfight = window.prompt("Would you light to FIGHT or Skip this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    if (promptfight === "fight" || promptfight === "FIGHT") {
        enemyhealth = enemyhealth - playerattack;
        console.log(enemyname + "'s health after the attack is: " + enemyhealth + " health points");
        if(enemyhealth <= 0){
            window.alert(enemyname + " has died!");
        } 
        else {
            window.alert(enemyname + " still has" + enemyhealth + " health points left.");
        };
        playerhealth = playerhealth - enemyattack;
        console.log(player1 + "'s health after the attack is: " + playerhealth+ " health points");
        if(playerhealth <= 0){
            window.alert(player1 + " has died!");
        }
        else {
            window.alert(player1 + " still has " + playerhealth + " health points left.")
        };
    } 
    else if(promptfight === "skip" || promptfight === "SKIP") {
        var confirmskip = window.confirm("Are you sure you want to quit?");
        if(confirmskip){
            window.alert(player1 + " has chosen to skip the fight! Goodbye.");
            playermoney = playermoney - 2;
        }
        else {
            fight()
        }

    } 
    else {
        window.alert("You need to choose a valid option. Try again!");
    };
    

};

for (i=0; i<3; i++){
    fight(enemynames[i]);
}