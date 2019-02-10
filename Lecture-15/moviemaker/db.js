const mongodb = require('mongodb').MongoClient;
let user = 'aayush';
let password = 'aayush123';
let dbname = 'moviemaker'
let url= `mongodb://${user}:${password}@ds129045.mlab.com:29045/moviemaker`;
let collection = '';
function connect() {
    mongodb.connect(url, function(err, client){
        if(err) throw err;
        let db = client.db(dbname);
        collection = db.collection('movieData');
    })
}

function insertDoc(movieObj,cb){
   collection.insertOne(movieObj,function(err, result){
       if (err) throw err;
       console.log(result); 
       cb();
   })

}

function findDoc(cb){
    collection.find({}).toArray(function(err, doc){
       cb(doc);
    })

}

module.exports = {
    connect,
    insertDoc,
    findDoc
}