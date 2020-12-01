var express = require('express');
var session = require('express-session');
var app = express();
var cors = require('cors');
var routers = require('./routes/index');

var passport = require('passport');
var googleStrategy = require('passport-google-oauth').OAuth2Strategy;

var sql = require('./db');

var CLIENT_ID = "745795505795-bco2e5dn4egom2o4rbmingf0s2341u02.apps.googleusercontent.com";
var CLIENT_SECRET = "IiVnYQGurXxFv8Ptp-d2SkD5";

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});

passport.use(new googleStrategy({
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    callbackURL: "http://localhost:5000/api/google/callback"
}, 
(accessToken, refreshToken, profile, done) => {
    // access the database and return the user
    const {id, displayName} = profile;

    sql.query(`SELECT * FROM users WHERE id=${id}`, (err, res) => {
        if (err)
            return done(err, null);

        if (res.length === 0) {
            console.log("User not found, creating one in the database");
            // user not found, creating one in database
            sql.query(`INSERT INTO users (id, name, email, pic) VALUES ('${id}', '${displayName}', '${profile.emails[0].value}', '${profile.photos[0].value}')`, (err, res) => {
                if (err)
                    return done(err, null);
            });
            console.log("User created");
        }

        return done(null, {id: id, name: displayName, email: profile.emails[0].value, pic: profile.photos[0].value});
    });

}
));

app.use(session({secret: 'app-secret', resave: true, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());
app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use('/api', routers);

module.exports = app;