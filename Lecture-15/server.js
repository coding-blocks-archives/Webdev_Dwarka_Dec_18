const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 5000;
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
 
const taskArray = [];
/**
 * express.static 
 * @function - It delievers static resources
 * @param {public dir path}
 * @param {__dirname} - It is the currect directory path of server.js
 */
app.use('/',express.static(path.join(__dirname,'public')));
app.post('/addTodo', (req,res)=>{
   let task = req.body;
   console.log(task);
//    taskArray.push(task);
   res.sendStatus(200);
});

app.get('/data', (req,res)=>{
    res.send(taskArray);
})

app.listen(port, () => console.log(`Listening at ${port}`));