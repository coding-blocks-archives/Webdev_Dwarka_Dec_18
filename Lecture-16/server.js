const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 5000;
var db = require('./db');

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.text());

/**
 * express.static 
 * @function - It delievers static resources
 * @param {public dir path}
 * @param {__dirname} - It is the currect directory path of server.js
 */
app.use('/',express.static(path.join(__dirname,'public')));

app.post('/addTodo', function(req,res){
    db.addTask(req.body.todo, function(){
        res.sendStatus(200);
    });
    // todo: {task: '', done: ''}
})

app.get('/data', function(req,res){
    db.findList(function(data){
        res.send(data);
    })
})
app.listen(port, () => {
    console.log(`Listening at ${port}`);
    db.connectDb();
});