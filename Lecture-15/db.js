const mongodb = require('mongodb').MongoClient;
let dbuser = 'aayush';
let dbpassword = 'aayush123';
let url = `mongodb://${dbuser}:${dbpassword}@ds021166.mlab.com:21166/shopcart`;

function connect() {
    mongodb.connect(url, function(err, client){
        if(err) throw err;
        console.log(client);
    })
}

module.exports = {
    connect
}