
var global = {};
(function(){
    var x = 2;
    

    var z = function() {
     return 2;
    }
 
    var y = function() {

    }

    global.publicZ = z;

})()
   


function hello() {
    var y = 5;
    function main() {
       return y;
    }

    return main;

}


var fn = hello();
console.log(fn());
//console.log(global.publicZ());

