const e = require('express');
var express = require('express');
var router = express.Router();
var passport = require('passport');

router.get('/user', (req, res) => {
    res.send({name: req.user.name, email: req.user.email, pic: req.user.pic});
});

router.get('/auth/status', (req, res) => {
    if (req.user)
        res.sendStatus(200);
    else
        res.sendStatus(401);
});

router.get('/google', passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login', 'email']}));
router.get('/google/callback', passport.authenticate('google', { successRedirect: 'http://localhost:3000',failureRedirect: 'http://localhost:3000/login' }));

module.exports = router;