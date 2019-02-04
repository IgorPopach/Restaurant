const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const jwt = require('jsonwebtoken');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const router = express.Router();

var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret';
opts.issuer = 'accounts.examplesoft.com';
opts.audience = 'yoursite.net';

passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    console.log('jwt_payload', jwt_payload);
    done(null, true);
}));

passport.use(new LocalStrategy(
    function(username, password, done) {
        // TODO: get user from DB with such username and password
        if (username !== 'TEST-USER' || password !== 'TEST-PASSWORD') {
            return done(null, false);
        }
        return done(null, {
            name: 'Some test',
            email: 'example@mail.com',
            token: jwt.sign({
                id: 'user-id',
            }, 'keyboard cat', {
                expiresIn:  "12h",
            })
        })
    }
));

router.post('/login', passport.authenticate('local'), (req, res) => {
    console.log('login:post', req.user);
    res.cookie('auth', req.user.token);
    
    return res.json({ success: true, user: {
        name: req.user.name,
        email: req.user.email,
        token: req.user.token,
    } });
});

router.post('/logout', (req, res) => {
    // TODO: logout user
    return res.json({ success: true });
});

router.get('/profile', (req, res) => {
    console.log('isValidToken: ', jwt.verify(req.cookies.auth, ))
    // 1. get user from DB
    // 2. check if it is same user
    // if it is same user
    // 3. return user object
    // if not
    // return error
    return res.json({ success: false, message: "Please login."})
})

module.exports = router;
