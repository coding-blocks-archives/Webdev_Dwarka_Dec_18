let box = document.getElementById('box');

function display() {
    fetch('/getMovies')
        .then((data)=> data.json())
        .then((res)=> {
           loop(res);
        })
}

function loop(data) {
    data.forEach((item)=>{
        let div = document.createElement('div');
        let text = document.createTextNode(item.movie_name);
        div.setAttribute('class', 'col');
        div.appendChild(text);
        box.appendChild(div);
    })
}
display();