var value = require('./main');
var fs = require('fs');

function readFile() {
    return new Promise((res, rej) => {
        fs.readFile('./goodreads.txt', function(err,data){
            if(err) return err;
            Data += data.toString();
            res(Data)
        })
    })
}

function writeFile(Data) {
    return new Promise((res, rej) => {
        fs.writeFile('./goodreads.txt', Data + ' Aayush', function(err){
            if(err) rej(err);
            res(Data)
        })
    })
}

readFile().then(writeFile).then((data) => {
    console.log(data)
}).catch(e=>{
   console.log(e);
})

