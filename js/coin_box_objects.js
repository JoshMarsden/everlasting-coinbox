//upgrade(string, #string, string, integer, integer)
function Upgrade(name, id, info, cost, numOfTimes) {
    this.name = name;
    this.Id = id;
    this.description = info;
    this.price = cost;
    this.numOfUpgrades = numOfTimes;
    this.upgradeCurrent = 1;
    this.boughtOut = false;
    this.create = function () {
        var element = "<div id=" + this.Id + " class=\"upgrade\"><p><span class=\"price\">" + this.price + "</span> Coins - <span>" + this.name + "</span></p><p class=\"howMany\"><span class=\"upgradeNumber\">" + this.upgradeCurrent + "</span>/<span>" + this.numOfUpgrades + "</span></p><p>" + this.description + "</p></div>";
        $(element).appendTo("#upgrades");
    };
    this.buy = function () {
        if (this.numOfUpgrades === this.upgradeCurrent) {
            $(this.Id).slideUp();
        }
    };
}

var teddyBearUpgrade = new Upgrade("Teddy Bears", "#teddyBears", "You know you want one :)", 5, 1);