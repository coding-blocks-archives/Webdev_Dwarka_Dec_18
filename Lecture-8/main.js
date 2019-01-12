
// Declarations
let btn = document.getElementById('btn');
let inp = document.getElementById('inp');
let result = document.getElementById('result');

/*
Add to cart functionality
@param {}
*/
btn.onclick = function(){
   add();
}

inp.onkeypress = function(event) {
    if(event.keyCode == 13) {
        add();
        
  }
}

function add() {
    let val = inp.value;
    // Creating li from HTML document
    let li = document.createElement('li');
    // Creating text node
    let text = document.createTextNode(val);
    // Putting text inside Element
    li.appendChild(text);
    result.appendChild(li);
    inp.value = '';
  
}