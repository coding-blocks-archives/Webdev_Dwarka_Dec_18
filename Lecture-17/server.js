const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const session = require('express-session');
const cookieParser = require('cookie-parser');
let db = require('./db');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', express.static('public'));
app.use(cookieParser());
app.use(session({secret: 'Boring passport'}));
app.use(passport.initialize());
app.use(passport.session());

app.post('/login', passport.authenticate('local',
        {
            successRedirect: '/success',
            failureRedirect: '/'
         }
));


passport.use(new localStrategy(
    function(username, password, done) {
        db.findUser(username, function(data){
            if(username != data[0].username) {
              console.log("from db " + data[0].username);
              console.log("from form" + username);
               return done(null,false)
           }
           if(password !== data[0].password) {
            console.log("from db " + data.password);
            console.log("from form" + password);
              return done(null,false)
           }
  
           console.log(username);
           return done(null, username);
  
        })
       
    }
));

passport.serializeUser(function(user, done){
    return done(null, user);
});

passport.deserializeUser(function(user, done){
    return done(null, user);
});

app.post('/signup', function(req, res){
    db.addUser(req.body.username, req.body.password, function(){
        res.sendStatus(200);
    });
})
app.get('/success', function(req, res){
    if(req.user) {
        res.send("Login successfully");
    }
    else {
        res.redirect('/');
    }
    
})

app.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
  });

app.listen(5000, function(){
    console.log("Server is running on 5000");
    db.connectDb();
})