const express = require('express');
const app = express();

const server = require('http').Server(app);
app.use('/', express.static('public'));

const io = require('socket.io')(server);

io.on('connection', function(socket){

   socket.emit('join', {'id': socket.id});
   socket.on('name', function(data){
       io.emit('joined', {name: data.name});
   })
    socket.on('sendMsg', function(data){
       
        io.emit('everybody', data);   
    });

});


server.listen(5000, function(){
    console.log("Running on 5000");
})