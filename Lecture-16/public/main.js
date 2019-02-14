
// Declarations
let btn = document.getElementById('btn');
let inp = document.getElementById('inp');
let result = document.getElementById('result');
let taskList = JSON.parse(localStorage.getItem('todoArray')) || [];
display();
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

function display() {
  
   let data = localStorage.getItem('todoArray')  
   let res = JSON.parse(data) || [];
   if(res.length == 0) {
     getTodo().then((data)=> (data.text()))
     .then((data)=> {
         res = JSON.parse(data)
         console.log(res)
         res.forEach((val)=>{
            generateNode(val.name);
         })
    })
   }
   else 
   {
        (res).forEach((val)=>{
            generateNode(val);
        })
   }
   
}

/**
 * @function - remove value from DOM
 * @param {number} index - Index is the value of the button index
 */
function removeVal(index) {
   taskList.splice(index,1);
   saveLocalStorage(taskList);
   
}

function saveLocalStorage(arr) {
   localStorage.setItem('todoArray', JSON.stringify(arr));
  
}

function add() {
    let val = inp.value;
    addtoServer(val);
    // Creating li from HTML document
    generateNode(val);
    taskList.push(val);
    saveLocalStorage(taskList);
    inp.value = '';
  
}

function generateNode(val) {
    let li = document.createElement('li');
    // Creating text node
    let text = document.createTextNode(val);
    // Putting text inside Element
    li.appendChild(text);
    let btn = document.createElement('button');
    let btnText = document.createTextNode('Remove');
    btn.appendChild(btnText);
    btn.addEventListener('click', function(){
        let index = taskList.indexOf(val);
        removeVal(index);
        result.removeChild(this.parentElement);
    })
    li.appendChild(btn);
    result.appendChild(li);
}

function addtoServer(val) {
    return fetch(`/addTodo`,{
        method: 'post',
        body: JSON.stringify({todo:{'name': val, 'done':false}})
    })
   .then((data)=> data.text())
   .then(data => console.log(data));
}

function getTodo() {
    return fetch('/data');
}