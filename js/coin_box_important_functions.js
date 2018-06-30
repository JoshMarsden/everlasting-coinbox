var coinAchievementNotEarned = true, hitAchievementNotEarned = true, colorsBoughtAchievementNotEarned = true;

//Display a giant trophy when any trohpy is earned
var displayTrophy = function () {
    'use strict';
    $("#achievementGet").fadeIn(1000);
    setTimeout($("#achievementGet").fadeOut(1000), 1000);
};

//The ahievements check function does just that
var checkAchievements = function () {
    'use strict';
    
    //25,000 Coin Achievement
    if (coinAchievementNotEarned) {
        if (coins >= 25000) {
            displayTrophy();
            $("#coins25000").addClass("earnedTrophy");
            trophiesEarned += 1;
            $("#trophyCount").html(trophiesEarned);
            coinAchievementNotEarned = false;
        }
    }
    //1,000 Clicks Achievement
    if (hitAchievementNotEarned) {
        if (totalhits >= 1000) {
            displayTrophy();
            $("#clicks1000").addClass("earnedTrophy");
            trophiesEarned += 1;
            $("#trophyCount").html(trophiesEarned);
            hitAchievementNotEarned = false;
        }
    }
    //3 background colors bought
    if (colorsBoughtAchievementNotEarned) {
        if (colorsBought === 3) {
            displayTrophy();
            $("#colors3").addClass("earnedTrophy");
            trophiesEarned += 1;
            $("#trophyCount").html(trophiesEarned);
            colorsBoughtAchievementNotEarned = false;
        }
    }
};

//The precision function cuts down a very precise float number to readable size
var precision = function (theString, numAfterDecimal) {
    'use strict';
    for (i = 0; i < theString.length; i++) {
        if (theString[i] === ".") {
            return theString.substr(0, i + numAfterDecimal);
        }
    }
};

//The redraw function updates any div information (in this case, the info divs for now...)
var redraw = function () {
    'use strict';
    
    var coinsDisplay = coins;
    if (coins > 1000000) {
        coinsDisplay = coins;
    }
    $("#coin_count").children("p").children("span").text(coinsDisplay);
    $("#total_hits").children("p").children("span").html(totalhits);
    $("#coins_per_hit").children("p").children("span").html(coinsPerHit);
    if (hitFrequency !== 0) {
        var hitFrequencyDisplay = 1000 / hitFrequency + " ";
        hitFrequencyDisplay = precision(hitFrequencyDisplay, 2);
        $("#hit_frequency").children("p").children("span").html(hitFrequencyDisplay);
    }
};

//This function runs the code whenever the coinbox is 'hit'
var hitCoinbox = function () {
    'use strict';
    coins += coinsPerHit;
    totalhits += 1;
    
    checkAchievements();
    redraw();
};

//Buy an upgrade
var buyUpgrade = function () {
    'use strict';
    var price = $(this).children("p").children(".price").html();
    var name = $(this).children("p").children("span").next().html();
    var howMany = [$(this).children("p").next().children(".upgradeNumber").html(), $(this).children("p").next().children(".upgradeNumber").next().html()];
    if (coins >= price) {
        coins -= price;
        if (howMany[0] === howMany[1]) {
            $(this).slideUp();
        } else {
            howMany[0] *= 1;
            howMany[0] += 1;
            $(this).children("p").next().children(".upgradeNumber").html(howMany[0]);
        }
        switch (name) {
        case "Autoclick":
            if (hitFrequency === 0) {
                hitFrequency = 2000;
            } else {
                hitFrequency *= 0.8;
            }
            hitloop = setInterval(hitCoinbox, hitFrequency);
            price *= 2;
            break;
        case "More Coins":
            coinsPerHit *= 1.6;
            coinsPerHit = Math.ceil(coinsPerHit);
            price *= 2;
            break;
        default:
        }
        $(this).children("p").children(".price").html(price);
        redraw();
    }
};

//Pick Background Color
var pickColor = function () {
    'use strict';
    var cost = 100;
    if ($(this).hasClass("notbought")) {
        if (coins >= cost) {
            $(this).removeClass("notbought").attr("title", $(this).attr("id") + " - purchased");
            colorsBought += 1;
            coins -= cost;
            redraw();
            if ($(this).attr("id") === "black" || $(this).attr("id") === "gray") {
                $("h1.everlastingcoinboxrelative").css("color", "white");
                $("#announcebox").css("color", "lightgray");
            } else {
                $("h1.everlastingcoinboxrelative").css("color", "black");
                $("#announcebox").css("color", "gray");
            }
            $("#wrapper").css("background", $(this).css("background"));
            checkAchievements();
        }
        $(".currentcolor").removeClass("currentcolor");
        $(this).addClass("currentcolor");
    } else {
        $("#wrapper").css("background", $(this).css("background"));
        $(".currentcolor").removeClass("currentcolor");
        $(this).addClass("currentcolor");
        if ($(this).attr("id") === "black" || $(this).attr("id") === "gray") {
            $("h1.everlastingcoinboxrelative").css("color", "white");
            $("#announcebox").css("color", "lightgray");
        } else {
            $("h1.everlastingcoinboxrelative").css("color", "black");
            $("#announcebox").css("color", "gray");
        }
    }
};