const mongodb = require('mongodb').MongoClient;
let dbuser = 'aayush';
let dbpassword = 'aayush123';
let dbname = 'shopcart'
let url = `mongodb://${dbuser}:${dbpassword}@ds021166.mlab.com:21166/shopcart`;
let collection = '';
function connect() {
    mongodb.connect(url, function(err, client){
        if(err) throw err;
        let db = client.db(dbname);
        collection = db.collection('shoppingcart');
        insertDoc();
        //console.log(db);
    })
}

function insertDoc(){
   collection.insertMany([{a:1} ],function(err, result){
       if (err) throw err;
       console.log(result); 
   })

}

module.exports = {
    connect
}