var initTestTools = function () {
    'use strict';
    //Test Buttons
    $("<button type=\"button\" onclick=\"giveMoney(5000000)\">Give me 5,000,000 Coins!</button>").appendTo('body');
    $("<button type=\"button\" onclick=\"giveMoney(500)\">Give me 500 Coins!</button>").appendTo('body');
};

var giveMoney = function (moneyamount) {
    'use strict';
    coins += moneyamount;
    checkAchievements();
    redraw();
};