var input = document.getElementById('inp');
var res = document.getElementById('result');
function add() {
    console.log(input.value);
    // Code to push all values into array
    // Loop Array
    let a = ''; 
    let b = input.value
    a = `${b} <p>Value is ${input.value}</p> `
    res.innerHTML = a;
   
}