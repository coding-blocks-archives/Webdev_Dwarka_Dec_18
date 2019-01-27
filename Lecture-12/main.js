

   this.a = 4;

  let self = {};
  self.a = '4';

   console.log(this);

   module.exports = {
     this: this
   }