
// window.onload = function() {
//     let btn = document.getElementById('btn');
//     let inp = document.getElementById('inp');
//     let result = document.getElementById('result');
//     let spinner = document.getElementById('spinner');

//     btn.onclick = function() {
//        spinner.style.display = 'block';
//        result.style.display = 'none';
//         var xhttp = new XMLHttpRequest();
//         xhttp.open('GET', `http://numbersapi.com/${inp.value}`)
    
//         xhttp.onreadystatechange = function() {
//             if(this.readyState == 4 && this.status== 200) {
     
//                result.innerHTML = xhttp.responseText;
//                spinner.style.display = 'none';
//                result.style.display = 'block';
//             }
//         }
    
//         xhttp.send();
//     }
   
// }

// Create Input box
// function @param number 
// Request to the numbersApi 
// Append the data on page


$(document).ready(function(){

    let inp = $('#inp');
    let btn = $('#btn');
    let result = $('#result');

    btn.click(function(){
        let val = inp.val();
        $.ajax({
            url: `http://numbersapi.com/${val}`,
            method: 'GET',
            success: function(data) {
               console.log(data);
               result.text(data)
            }
        })
        
    }) 

})