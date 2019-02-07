const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 5000;
const taskArray = [];
/**
 * express.static 
 * @function - It delievers static resources
 * @param {public dir path}
 * @param {__dirname} - It is the currect directory path of server.js
 */
app.use('/',express.static(path.join(__dirname,'public')));
app.get('/addTodo', (req,res)=>{
   let task = req.query.task;
   taskArray.push(task);
   console.log(taskArray);
   res.sendStatus(200);
});

app.get('/deleteTodo',(req,res)=>{
    //getting the index of the element to be removed
    let elementIndex = req.query.index;

    console.log(elementIndex);
    // remove element using splics method
    taskArray.splice(elementIndex,1);
    console.log(taskArray);
    res.sendStatus(200);
})

app.get('/data', (req,res)=>{
    res.send(taskArray);
});

app.listen(port, () => console.log(`Listening at ${port}`));