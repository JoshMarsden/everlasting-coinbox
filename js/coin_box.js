/*
................................................................................
This coin_box.js file is sort of like a big int main() function in C++.
This is the main sequence or 'portal' where all functions and objects are setup.
................................................................................
*/
var hitloop, hitFrequency;
//Coinbox variables go here
var coins, coinsPerHit, totalhits = 0, colorsBought = 0, trophiesEarned = 0;
//Array variables go here. var i is included because Brackets freaks out when variables are not declared in the beginning of the file
var i;

//This function initializes all variables when the webpage loads
var init = function () {
    'use strict';
    coins = 0;
    coinsPerHit = 1;
    hitFrequency = 0;
    
    //Set up any ingame loops here
    if (hitFrequency > 0) {
        hitloop = setInterval(hitCoinbox, hitFrequency);
    }
    
    buildDOM();
    initClickEvents();
    initTestTools();
    $("#wrapper").children().addClass("everlastingcoinboxrelative");
    
    //Test the info drop down stuff here
    $(".infoDescription").hide();
    $(".infoDrop").mouseenter(function () {
        $(this).siblings(".infoDescription").slideDown("fast");
    });
    $(".infoDrop").mouseleave(function () {
        $(this).siblings(".infoDescription").slideUp("fast");
    });
    
    //Achievement announcement box must be hidden first
    $("#achievementGet").hide();
    
    $(".achievement").children("p").hide();
    $(".achievement").click(function () {
        $(this).children("p").slideToggle("fast");
    });
    $(".achievement").mouseleave(function () {
        $(this).children("p").slideUp("fast");
    });
    
    $("#topten").children("h2").mousedown(function ( event ) {
        $(this).position({top:event.mouseX, left:event.mouseY});
    });
    
    $(".color").mouseover(function () {
        $("#announcebox").children("p").text("Click to purchase this background color for 100 coins. " + $(this).attr("id"));
    });
};

$(document).ready(function () {
    'use strict';
    init();
});