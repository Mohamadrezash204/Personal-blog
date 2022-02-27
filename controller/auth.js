const bcrypt = require('bcrypt');
const User = require('../models/users');
const generalTools = require('../utils/multerAvatar')

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
        bcrypt.compare(req.body.password, user.password, function(err, result) {
            if (err) { throw (err); }
            if (result) {
                req.session.user = user;
                return res.redirect('/home')
            }
            return res.send("the password is incorrect");
        });

    })
}

function registerpage(req, res) {
    if (req.session.user) {
        res.redirect('/home');
    }
    res.render('register', { title: "Register" })
}

function register(req, res) {
    const upload = generalTools.upload.single('avatar');
    upload(req, res, function(err) {
        if (err) {
            return res.send(err)
        }
        User.findOne({ username: req.body.username }, function(err, user) {
            if (err) return res.send({ masage: err });
            if (user) return res.send({ success: false, message: 'This user existed.' });
        })
        const newUser = {}
        if (req.file) {
            newUser.avatar = `./images/avatar/${req.file.filename}`
        }
        newUser.username = req.body.username
        newUser.firstName = req.body.firstName
        newUser.lastName = req.body.lastName
        newUser.phone = req.body.phone
        newUser.password = req.body.password
        newUser.role = req.body.role
        newUser.gender = req.body.gender
        User.create(newUser, function(err, result) {
            if (err) return res.send({ success: false, message: err });
            if (result) {
                res.redirect("/auth/login");
                //or
                // return res.send({ success: true, message: 'User created.' });
            }
        })
    })


}

module.exports = { loginpage, login, registerpage, register }