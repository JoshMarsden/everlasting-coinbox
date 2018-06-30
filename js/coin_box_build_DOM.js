var buildDOM = function () {
    'use strict';
    //Insert all DOM objects here:
    //$("").appendTo();
    
    //div and wrapper ID list
    var wrapper = "#wrapper", info = "#info", upgrades = "#upgrades", shinythings = "#achievements";
    
    //#wrapper section
    $("<section id=\"wrapper\"></section>").appendTo('body');
    
    //Enter... the Coin Box! ...and the crowd goes wild! "hhhaaaaahhhhh"
    $("<h1>The Everlasting Coinbox</h1><div id=\"coinbox\"></div>").appendTo(wrapper);
    
    //Insert the main boxes directly inside of #wrapper
    //info container
    $("<div id=\"info\"></div>").appendTo(wrapper);
    //upgrades container
    $("<div id=\"upgrades\" class=\"upgrades-achievements\"></div>").appendTo(wrapper);
    //achievements container
    $("<div id=\"achievements\" class=\"upgrades-achievements\"></div>").appendTo(wrapper);
    //trophy box
    $("<div id=\"achievementbox\"><img src=\"../images/trophy.png\"><p>Trophies: <span id=\"trophyCount\">0</span></p></div>").appendTo(wrapper);
    //announcements box
    $("<div id=\"announcebox\"><p>Click the coinbox to get coins!</p></div>").appendTo(wrapper);
    //$("").appendTo(wrapper);
    
    //Information Blocks
    $("<div id=\"coin_count\" class=\"info Coin\"><p class=\"infoDrop\">Coins: <span>0</span></p><p class=\"infoDescription\">Earn coins to buy upgrades and earn trophies</p></div>").appendTo(info);
    $("<div id=\"coins_per_hit\" class=\"info\"><p class=\"infoDrop\">Coins/Hit: <span>1</span></p><p class=\"infoDescription\">You can increase the amount of Coins earned per click with the More Coins upgrade</p></div>").appendTo(info);
    $("<div id=\"hit_frequency\" class=\"info\"><p class=\"infoDrop\">Hits/Sec: <span>0</span></p><p class=\"infoDescription\">Increase the amount of coins you get per second with the Autoclick upgrade</p></div>").appendTo(info);
    $("<div id=\"total_hits\" class=\"info\"><p class=\"infoDrop\">Total Hits: <span>0</span></p><p class=\"infoDescription\">Earn some achievements and get in the top ten with your total number of hits</p></div>").appendTo(info);
    
    //Upgrade Buttons
    $("<h2>Upgrades</h2><div id=\"spacer\"></div>").appendTo(upgrades);
    $("<div id=\"autoclick\" class=\"upgrade\"><p><span class=\"price\">40</span> Coins - <span>Autoclick</span></p><p class=\"howMany\"><span class=\"upgradeNumber\">1</span>/<span>12</span></p><p>For those of you who are afraid of cramping up</p></div>").appendTo(upgrades);
    $("<div id=\"morecoins\" class=\"upgrade\"><p><span class=\"price\">60</span> Coins - <span>More Coins</span></p><p class=\"howMany\"><span class=\"upgradeNumber\">1</span>/<span>12</span></p><p>Increase the amount of coins per box</p></div>").appendTo(upgrades);
    $("<div id=\"colorchanger\" class=\"upgrade\"><div id=\"red\" class=\"colorpick notbought\" title=\"red - 100 Coins\" style=\"background: #ba1b1b\"></div><div id=\"blue\" class=\"colorpick notbought\" title=\"blue - 100 Coins\" style=\"background: #1971b4\"></div><div id=\"green\" class=\"colorpick notbought\" title=\"green - 100 Coins\" style=\"background: #029602\"></div><div id=\"purple\" class=\"colorpick notbought\" title=\"purple - 100 Coins\" style=\"background: #a512a5\"></div><div id=\"black\" class=\"colorpick notbought\" title=\"black - 100 Coins\" style=\"background: #000\"></div><div id=\"white\" class=\"colorpick currentcolor\" title=\"white - purchased\" style=\"background: #fff\" class=\"currentcolor notbought\"></div><div id=\"gray\" class=\"colorpick notbought\" title=\"gray - 100 Coins\" style=\"background: #7e7e7e\"></div></div>").appendTo(upgrades);
    teddyBearUpgrade.create();
    //$("").appendTo(upgrades);
    
    //Achievements! Everybody loves 'em
    $("<h2>Achievements</h2><div id=\"spacer\"></div>").appendTo(shinythings);
    $("<div id=\"coins25000\" class=\"achievement\"><p>Earn 25,000 Coins</p></div>").appendTo(shinythings);
    $("<div id=\"clicks1000\" class=\"achievement\"><p>Hit the Coin Box 1,000 times</p></div>").appendTo(shinythings);
    $("<div id=\"colors3\" class=\"achievement\"><p>Buy 3 Background Colors</p></div>").appendTo(shinythings);
    $("<div class=\"achievement\"><p>This is an achievement</p></div>").appendTo(shinythings);
    //$("").appendTo(shinythings);
    $("<div id=\"achievementGet\"></div>").appendTo(shinythings);
    
    //divs for minigames
    $("<div id=\"slots\"></div>").appendTo(wrapper);
    
    //canvases for minigames
    
    //Top Ten Records Box
    $("<div id=\"topten\"><h2 title=\"Click to Minimize\">Top Ten Results</h2><div></div></div>").appendTo('body');
};