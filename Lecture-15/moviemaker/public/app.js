
var name = document.getElementById('name');
var url = document.getElementById('url');
var desc = document.getElementById('desc');
var btn = document.getElementById('btn');



function addmovie(){
   var movieObj = {
       name: name.value,
       url: url.value,
       desc: desc.value
   }

   fetch('/addMovie', {
       headers: {
        'Content-Type': 'application/json'
       },
       method: 'post',
       body: JSON.stringify(movieObj)
   })
   .then((data)=> {
       if(data.status == 200) {
           window.location.href = 'movies.html'
       }
   });
}

btn.onclick = function(){
    addmovie();
}
