const bcrypt = require('bcryptjs');
const User = require('../models/users');

function loginpage(req, res) {

    if (req.session.user) {
        res.redirect('/home')
    }
    res.render('login', { title: 'Login' })

}

function login(req, res) {
    User.findOne({ "username": `${req.body.username}` }, function(err, user) {
        if (err) return res.send(err)
        if (!user) return res.send("does not exist");
        if (!(bcrypt.compare(req.body.password, user.password))) return res.send("the password is incorrect");
        //res.send("ok")
        req.session.user = user;
        return res.redirect('/home');
    })
}

function registerpage(req, res) {
    if (req.session.user) {
        res.redirect('/home');
    }
    res.render('register', { title: "Register" })
}

function register(req, res) {

    User.findOne({ username: req.body.username }, function(err, user) {
        if (err) return res.send({ masage: err });
        if (user) return res.send({ success: false, message: 'This user existed.' });
    })
    User.create(req.body, function(err, result) {
        if (err) return res.send({ success: false, message: err });
        if (result) {
            res.redirect("/auth/login");
            //or
            // return res.send({ success: true, message: 'User created.' });
        }
    })


}

module.exports = { loginpage, login, registerpage, register }