var mysql  = require('mysql');
var connection = {};
function connectDb() {
    connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'aayush12',
        password : '1234',
        database : 'todoList'
      });

      connection.connect(function(err){
          if (err) throw err;
          console.log(connection.threadId);
      })
      
}

function findList(cb) {
    connection.query(`Select * from todo`, function(err, data){
        cb(data);
    })
}

function addTask(obj, cb) {
    connection.query(`INSERT INTO todo (name, done) VALUES(${obj.name}, ${obj.done})`, function(err, data){
        cb();
    })
}
module.exports = {
    connectDb,
    addTask,
    findList
}