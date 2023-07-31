/*

    Name of games: BoundingGames!
    Author: ONANA vital
    Made with: HTML5, CSS3, ES6, ElectronJS, NPM, TailwindCSS and JQuery
    Available for: Windows, Mac OS and Linux

*/

//  Variables

var perso = document.querySelector(".perso");
var obstacles = document.querySelector(".obstacles");

//  function pour faire sauter le personnage

function sauter(){
    if(perso.classList != "animation"){
        perso.classList.add('animation'); 
    }
    setTimeout(function(){
        perso.classList.remove('animation'); 
    },500)
}


//  Je vérifie si l'obstacle touche le héro du jeu(Migos 👽)

var verification = setInterval(function(){
    var persoTop = parseInt(window.getComputedStyle(perso).getPropertyValue("top")) ;
    var obstaclesLeft = parseInt(window.getComputedStyle(obstacles).getPropertyValue("left")) ;

    if(obstaclesLeft<20 && obstaclesLeft >0 && persoTop>= 130){
        obstacles.style.animation = "none";
        alert("Vous avez perdu la partie. Vous pouvez recommencer !");
    }
},1)