/**
 * Created by Fiyaz on 10/11/2014.
 */
module.exports = function(app, passport) {

    app.get('/', function(req, res) {
        res.render('index', { title: 'Express' });
    });

    app.get('/login', function(req, res) {
        res.render('login', { message: req.flash('loginMessage') });
    });

    app.get('/signup', function(req, res) {

        res.render('signup', { message: req.flash('signupMessage') });
    });

    app.get('/users', isLoggedIn, function(req, res) {
        res.render('users', {
            user : req.user,
            title: 'NerdCats',
            paragraph: 'Behold!!!! Your own NerdGames Server'
        });
    });

    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect : '/users',
        failureRedirect : '/signup',
        failureFlash : true
    }));

    app.post('/login', passport.authenticate('local-login', {
        successRedirect : '/users',
        failureRedirect : '/login',
        failureFlash : true
    }));

    app.get('/auth/google', passport.authenticate('google', { scope : ['profile', 'email'] }));

    // the callback after google has authenticated the user
    app.get('/auth/google/callback',
        passport.authenticate('google', {
            successRedirect : '/users',
            failureRedirect : '/'
        }));
};

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.redirect('/');
}