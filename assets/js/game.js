var player1 = window.prompt("What is your robot's name?");
var playerhealth = 100;
var playerattack = 51;

console.log("Players name is: " + player1,"Players Health is " + playerhealth,"Platers attack is " + playerattack);

var enemyname = "Roborto";
var enemyhealth = 50;
var enemyattack = 12;

var fight =  function() {
    window.alert("Welcome to Robot Gladiators!");
    enemyhealth = enemyhealth - playerattack;
    console.log(enemyname + "'s health after the attack is: " + enemyhealth + " health points");
    playerhealth = playerhealth - enemyattack;
    console.log(player1 + "'s health after the attack is: " + playerhealth+ " health points");

    if(playerhealth <= 0){
        window.alert(player1 + " has died!");
    }
    else if(enemyhealth <= 0){
        window.alert(enemyname + " has died!");
    } 
    else {
        window.alert(enemyname + " still has" + enemyhealth + " health points left.");
    };

};

fight();