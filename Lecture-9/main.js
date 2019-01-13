function foo() {
    console.log('Foo')
    setTimeout(function(){
       imageProcessing(function(y){
          setImageValue(y, function(z){
              console.log(y+z);
          });
       });

    },0)
    console.log('bar');
}

function imageProcessing(cb)  {
    let x = 5;
    cb(x);
}

function setImageValue(y,cb) {
   setTimeout(function(){
       console.log('Async SetValue');
       cb(y+1);
   },0)
   console.log('Still processing');
}

foo();