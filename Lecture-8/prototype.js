/*
game.prototype
{player: ƒ, constructor: ƒ}player: "spiderman"constructor: ƒ game()arguments: nullcaller: nulllength: 0name: "game"prototype: {player: "spiderman", constructor: ƒ}__proto__: ƒ ()[[FunctionLocation]]: VM126:1[[Scopes]]: Scopes[1]__proto__: Object
game.prototype.player('spiderman')
undefined
game.prototype
{player: "spiderman", constructor: ƒ}player: "spiderman"constructor: ƒ game()__proto__: Object
game.prototype.player('sp')
game.prototype.player = function(wep){
   this.weapon = wep;
}
ƒ (wep){
   this.weapon = wep;
}
game.prototype.player('knife');
undefined
game.prototype
{player: ƒ, weapon: "knife", constructor: ƒ}
game.prototype.player('sword')
undefined
game.prototype
{player: ƒ, weapon: "sword", constructor: ƒ}
var superman = new game();
undefined
superman
game {}
superman.player('light')
undefined
game
ƒ game(){}
game.prototype
{player: ƒ, weapon: "sword", constructor: ƒ}
superman
game {weapon: "light"}
var batman = new game();
undefined
batman
game {}
batman.player('money')
undefined
batman
game {weapon: "money"}
superman
game {weapon: "light"}
game.prototype.updateWeapon = function(){

  this.weapon = this.weapon + ' a';
}
ƒ (){

  this.weapon = this.weapon + ' a';
}
superman.updateWeapon()
undefined
superman
game {weapon: "light a"}
batman.updateWeapon()
undefined
batman
game {weapon: "money a"}
superman
game {weapon: "light a"}weapon: "light a"__proto__: Object
superman.power = 'fly'
"fly"
superman

*/ 