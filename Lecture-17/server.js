const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const session = require('express-session');
const cookieParser = require('cookie-parser');
let Dbusername = 'aayush';
let Dbpassword = 'aayush1234';
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
         if(username != Dbusername) {
              done(null,false)
         }
         if(password !== Dbpassword) {
            done(null,false)
         }

         done(null, username);

    }
));

passport.serializeUser(function(user, done){
    done(null, user);
});

passport.deserializeUser(function(user, done){
    done(null, user);
});

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
})