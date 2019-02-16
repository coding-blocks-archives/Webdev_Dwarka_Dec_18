var mysql  = require('mysql');
var connection = {};
function connectDb() {
    connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'password',
        database : 'auth'
      });

      connection.connect(function(err){
          if (err) throw err;
          console.log(connection.threadId);
      })
      
}

function findUser(name, cb) {
    connection.query(`Select * from users where username = '${name}'`, function(err, data){
        if(err) throw err;
        console.log("Coming from Database", data);
        cb(data);
    })
}

function addUser(username, password, cb) {
    connection.query(`INSERT INTO users (username, password) VALUES('${username}', '${password}')`, function(err, data){
        if (err) throw err;
        cb();
    })
}
module.exports = {
    connectDb,
    addUser,
    findUser
}