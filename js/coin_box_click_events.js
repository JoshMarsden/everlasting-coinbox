var initClickEvents = function () {
    'use strict';
    
    //Code run when the Coin Box is clicked
    $("#coinbox").click(hitCoinbox);
    
    //Code run when any upgrade buttons are clicked
    $(".upgrade").click(buyUpgrade);
    
    //Hopefully I can get this colored background upgrade to work :/ It works!!!
    $(".colorpick").click(pickColor);
    
    //Minimize the top ten score list when the header is clicked
    $("#topten").children('h2').click(function () {
        $("topten").children('div').slideUp();
    });
};