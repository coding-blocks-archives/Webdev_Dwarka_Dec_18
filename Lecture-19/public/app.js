
var inp = document.getElementById('inp');
var socket = io.connect();
var result = document.getElementById('result');
var nam = '';

inputName();
function inputName() {
   nam =  window.prompt("What's your name?")
}
function send() {
    socket.emit('sendMsg', {name: nam, key: inp.value})
}

socket.on('join', function(data){

  socket.emit('name', {name: nam}); 



});

socket.on('joined', function(data){
  let line = `${data.name} has JOINED`;
  let pi =  document.createElement('p');
  let text = document.createTextNode(line);
  pi.appendChild(text);
  result.appendChild(pi);

})
socket.on('everybody', function(data){
   createNodes(data);
})

function createNodes(data){
    var p = document.createElement('p');
    var namBox = document.createElement('span');
    var msgBox = document.createElement('span');

    var namtext = document.createTextNode(data.name + ": ");
    var msgtext = document.createTextNode(data.key);

    namBox.appendChild(namtext);
    msgBox.appendChild(msgtext);

    p.appendChild(namBox);
    p.appendChild(msgBox);

    result.appendChild(p);
}