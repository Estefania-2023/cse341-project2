const passport = require('passport');

const router = require('express').Router();

router.use('/', require('./swagger'));


router.use('/entrepreneurs', require('./entrepreneurs'));
router.use('/companies', require('./companies'));



router.get('/login', passport.authenticate('github'));

router.get('/github/callback',
    passport.authenticate('github', { failureRedirect: '/'}),
    (req, res) => {
        req.session.user = req.user
        res.redirect('/');
    }
);

router.get('/logout', function(req,res, next) {
    req.logout(function(err) {
        res.redirect('/');
    });
});



module.exports = router