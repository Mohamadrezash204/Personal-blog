function sessionChecker(req, res, next) {
    if (req.session.user && req.cookies.userSeed) {
        return res.redirect('/home');
    }
    next();
}

function isLoggedIn(req, res, next) {
    if (!req.session.user || !req.cookies.userSeed) {
        return res.redirect('/home');
    }
    next();
}

function isAdmin(req, res, next) {
    if (req.session.user.role !== 'admin') {
        return res.redirect('/home');
    }
    next();
}

module.exports = {
    sessionChecker,
    isLoggedIn,
    isAdmin
}