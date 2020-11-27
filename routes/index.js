var express = require('express');
var router = express.Router();
var passport = require('passport');

router.get('/', (req, res) => {
    res.sendStatus(200);
});

router.get('/google', passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login']}));
router.get('/google/callback', passport.authenticate('google', { successRedirect: 'http://localhost:5000/api',failureRedirect: 'http://localhost:3000/login' }),
(req, res) => {
    res.redirect('/');
});

module.exports = router;