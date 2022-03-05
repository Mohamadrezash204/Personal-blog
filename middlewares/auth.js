const mongoose = require('mongoose');
const Article = require("../models/Articles")

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
async function isAuthor(req, res, next) {
    let articleid = "";
    req.params.id ? articleid = req.params.id : articleid = req.body.id;

    const article = await Article.findById(articleid).populate('author').lean();

    if (req.session.user.avatar !== article.author.avatar && req.session.user.role !== "admin") {
        return res.send("شما نمی توانید تغییر ایجاد کنید")
    }
    next()


}

module.exports = {
    sessionChecker,
    isLoggedIn,
    isAdmin,
    isAuthor
}