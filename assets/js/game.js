var player1 = window.prompt("What is your robot's name?");
var playerhealth = 100;
var playerattack = 10;
var playermoney = 10;

console.log("Players name is: " + player1,"Players Health is " + playerhealth,"Platers attack is " + playerattack);

var enemynames = ["Roberto", "Amy Android", "Robo Trumble"];
var enemyhealth = 50;
var enemyattack = 12;

var deadbodies = 0;


var fight =  function(enemyname) {
    while(enemyhealth > 0 && playerhealth > 0){
        var promptfight = window.prompt("Would you light to FIGHT or Skip this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        if(promptfight === "skip" || promptfight === "SKIP") {
            var confirmskip = window.confirm("Are you sure you want to quit?");
            if(confirmskip){
                window.alert(player1 + " has chosen to skip the fight! Goodbye.");
                playermoney = playermoney - 10;
                break;
            }
        }
        enemyhealth = enemyhealth - playerattack;
        console.log(enemyname + "'s health after the attack is: " + enemyhealth + " health points");
        if(enemyhealth <= 0){
            window.alert(enemyname + " has died!");
            deadbodies++;
            break;
        } 
        else {
            window.alert(enemyname + " still has " + enemyhealth + " health points left.");
        };
        playerhealth = playerhealth - enemyattack;
        console.log(player1 + "'s health after the attack is: " + playerhealth+ " health points");
        if(playerhealth <= 0){
            window.alert(player1 + " has died!");
            break;
        }
        else {
            window.alert(player1 + " still has " + playerhealth + " health points left.")
        };
    };
}

var startgame = function(){
    playerhealth = 100;
    playerattack = 10;
    playermoney = 10;
    deadbodies = 0;

    for (i=0; i<enemynames.length; i++){
        if(playerhealth > 0){
            window.alert("Welcome to Robot Gladiators! Round " + (i +1));
        }
        else {
            window.alert("You lose! Game Over!");
            break;
        }
        pickedenemyname = enemynames[i];
        enemyhealth=50;
        fight(pickedenemyname);
        if(playerhealth > 0 && i < enemynames.length - 1){
            var confirmshop = window.confirm("Would you like to enter the shop?")
            if(confirmshop){
                shop();
            }
        }
    }
    thanos();
}

var thanos = function(){
    if(deadbodies === 3){
        window.alert("You win! Opponents defeated = " + deadbodies + " Score = " + playermoney);
    }
    else{
        window.alert("LOSER! Opponents defeated = " + deadbodies + " Score = " + playermoney);
    }
    var playagain = window.confirm("Would you like to build a snowman?");
    if(playagain){
        startgame();
    }
    else{
        window.alert("GAME OVER!");
    }
}
var shop = function(){
    window.alert("Your bag is full of "+ playermoney + " coins.");
    var shopanswer = window.prompt("Would you like to REFILL 20 healthfor 7 coins, UPGRADE 6 attackfor 7 coins, or LEAVE the shop? Please enter REFILL / UPGRADE / LEAVE to make a choice.");
    switch(shopanswer){
        
        case "REFILL" : 
        case "refill" :
            if(playermoney >= 7){
                playerhealth = playerhealth + 20;
                playermoney = playermoney - 7;
                window.alert("REFILLED 20 Health. Your health is now: "+ playerhealth);
            }
            else{
                window.alert("Not a valid option, you too broke");
                shop();
            }
            break;
        case "upgrade" :
        case "UPGRADE" :
            if(playermoney >= 7){
                playerattack = playerattack + 6;
                playermoney = playermoney - 7;
                window.alert("Upgraded 6 attack. Your attack is now: "+ playerattack);
            }
            else{
                window.alert("Not a valid option, you too broke");
                shop(); 
            }
            break;
        case "LEAVE" :
        case "leave" :
            window.alert("BYE BYE NOW, thank you come again!");
            break;
        default:
            window.alert("Not a valid option");
            shop();
            break;
    }
}
startgame();
