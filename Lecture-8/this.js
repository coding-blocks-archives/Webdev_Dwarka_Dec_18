// Default Binding
function hello() {
    add();
}

function add() {
    console.log(this);
}

//hello();

// Implicit Binding
function hello() {
   
    var obj = {
        name: 'mango',
        fruit: function() {
            console.log(this.name);
        }
    }

    obj.fruit();
} 

//hello();

// Explicit Binding 
// function hello( a, fruit1, fruit2) {
//     this = a;
//   console.log(this);
//   console.log(fruit1);
//   console.log(fruit2);
// } 



// obj.fruit();

// function main() {
//     var obj = {
//         name: 'mango',
//         fruit: function() {
//             console.log(this.name);
//         }
//     }

//     hello(obj, 'apple', 'mango');
// }

var obj1 = {
   nam:  'apple',
   fruit: function(){
    console.log(this.nam);
  }
}

var obj2 = {
  nam: 'orange',
  fruit: function(){
    console.log(this.nam);
  }
}

function getFruit(a,b) {
    console.log(a,b);
    console.log(self.nam);
}

getFruit();
getFruit.apply(obj1);
getFruit.apply(obj1, ['apple', 'lichie']);

// Constructive Binding
function Greet(name, category) {
    let obj = Object.create({});
    let self = obj;
    self.playerName = name;
    self.cat = category;
    return self;
}
var player1 = Greet('sham1','player');
// var player2 = Greet('sham2','player');
// var player3 = Greet('sham3','player');
// var player4 = Greet('sham4','player');
console.log(player1);


