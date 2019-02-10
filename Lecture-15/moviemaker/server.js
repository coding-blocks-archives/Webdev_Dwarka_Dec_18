const express = require('express');
const app = express();
const path = require('path');
const db = require('./db');
const port = process.env.PORT || 5000;

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.text());
const movieArray = [];
/**
 * express.static 
 * @function - It delievers static resources
 * @param {public dir path}
 * @param {__dirname} - It is the currect directory path of server.js
 */
app.use('/',express.static(path.join(__dirname,'public')));
app.post('/addMovie', (req,res)=>{
   let movie = req.body;
   db.insertDoc(movie, function(){
    // res.redirect('/getMovies');
    res.sendStatus(200);
   });
  
});


app.get('/display', (req,res)=>{
    res.send(movieArray);
})

app.get('/getMovies', function(req,res){
    db.findDoc(function(documents){
         res.json(documents);

    })
})

app.listen(port, () => {
    console.log(`Listening at ${port}`);
    db.connect();
});