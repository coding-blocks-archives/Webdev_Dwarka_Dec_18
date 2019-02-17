const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'public'));

app.get('/add', function(req,res){

   res.render('index', {
       todo: [
           {task: 'a', done: true, product: 'mobile'},
           {task: 'b', done: true},
           {task: 'c', done: true}
       ]
   }, function(err, data){
       console.log(data);
   })
});

app.listen(5000, function(){
  console.log('Server running on 5000');
});