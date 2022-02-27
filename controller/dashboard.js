const bcrypt = require("bcrypt")
const Users = require("../models/users")
const fs = require("fs")
const path = require("path")
const generalTools = require("../utils/multerAvatar")

function updateUser(req, res) {
    const user = req.session.user;
    //console.log(user);

    let edituser = {}
    req.body.username ? edituser.username = req.body.username : null;
    req.body.firstName ? edituser.firstName = req.body.firstName : null;
    req.body.lastName ? edituser.lastName = req.body.lastName : null;
    req.body.phone ? edituser.phone = req.body.phone : null;
    req.body.gender ? edituser.gender = req.body.gender : null;
    if (req.body.password) {
        bcrypt.hash(req.body.password, 10, function(err, hash) {
            if (err) return (err);
            edituser.password = hash;
        });
    }
    Users.findByIdAndUpdate(user._id, edituser,
        function(err, docs) {
            if (err) {
                console.log(err)
            } else {
                Users.findById(user._id, function(err, docs) {
                    if (err) return res.send({ success: false, masage: err })
                    req.session.user = docs;
                    return res.redirect('/dashboard')

                })
            }
        })
}

function deleteUser(req, res) {
    let userid;
    if (req.session.user.role === 'admin') { userid = req.body._id } else { userid = req.session.user._id };

    Users.findByIdAndDelete(userid, function(err, docs) {
        if (err) {
            console.log(err)
        } else {
            if (req.session.user.role === "admin") {
                res.redirect("/admin")
            } else {
                res.send({ success: true, message: `deleted ${docs}` })
                res.redirect("/auth/register")

            }

        }

    });
}

function uploadAvatar(req, res) {
    const user = req.session.user
    const upload = generalTools.upload.single('avatar');

    upload(req, res, function(err) {
        if (err) {
            console.log(err);
            return res.status(500).json({ msg: "err" })
        }
        // res.redirect("/dashboard")
        if (user.avatar === './images/avatar/avatar.jpg') {
            Users.findByIdAndUpdate(user._id, { avatar: `./images/avatar/${req.file.filename}` },
                function(err, docs) {
                    if (err) {
                        console.log(err)
                    } else {
                        Users.findById(user._id, function(err, docs) {
                            if (err) return res.send({ success: false, masage: err })
                            req.session.user = docs;
                            return res.redirect('/dashboard')

                        })
                    }
                })
        } else {
            fs.unlinkSync(path.join(__dirname, `../public`, req.session.user.avatar))
            Users.findByIdAndUpdate(user._id, { avatar: `./images/avatar/${req.file.filename}` },
                function(err, docs) {
                    if (err) {
                        res.send(err);
                    } else {
                        Users.findById(user._id, function(err, docs) {
                            if (err) return res.send({ success: false, masage: err })
                            req.session.user = docs;
                            return res.redirect('/dashboard')

                        })
                    }
                })

        }

    })
}

module.exports = { updateUser, deleteUser, uploadAvatar }