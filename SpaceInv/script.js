var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.onload = function() {
var ct = document.getElementById("game");
var img=document.getElementById("ship");
var ctx = ct.getContext("2d");
ctx.drawImage(img, window.innerWidth/2, window.innerHeight/8*7, 50, 50);
}

function KeyListener() {
    this.pressedKeys = [];
 
    this.keydown = function(e) {
        this.pressedKeys[e.keyCode] = true;
    };
 
    this.keyup = function(e) {
        this.pressedKeys[e.keyCode] = false;
    };
 
    document.addEventListener("keydown", this.keydown.bind(this));
    document.addEventListener("keyup", this.keyup.bind(this));
    document.addEventListener("keyleft", this.keydown.bind(this));
    document.addEventListener("keyright", this.keyup.bind(this));
}
 
KeyListener.prototype.isPressed = function(key)
{
    return this.pressedKeys[key] ? true : false;
};
 
KeyListener.prototype.addKeyPressListener = function(keyCode, callback)
{
    document.addEventListener("keypress", function(e) {
        if (e.keyCode == keyCode)
            callback(e);
    });
};

function Game(){
    var canvas = document.getElementById("game");
    this.width = canvas.width;
    this.height = canvas.height;
    this.context = canvas.getContext("2d");
    this.keys = new KeyListener();
    this.ship = new Ship(100,100);
    this.ship.y = this.height/2 - this.p1.height/2;
}

function Ship(x,y) {
    this.x = x;
    this.y = y;

}
Ship.prototype.draw = function(p)
{
    
};