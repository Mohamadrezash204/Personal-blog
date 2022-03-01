const bcrypt = require("bcrypt")
const Users = require("../models/users")
const fs = require("fs")
const path = require("path")
const generalTools = require("../utils/multerAvatar")

async function updateUser(req, res) {
    const user = req.session.user;
    let edituser = {}
    req.body.username ? edituser.username = req.body.username : null;
    req.body.firstName ? edituser.firstName = req.body.firstName : null;
    req.body.lastName ? edituser.lastName = req.body.lastName : null;
    req.body.phone ? edituser.phone = req.body.phone : null;
    req.body.gender ? edituser.gender = req.body.gender : null;
    if (!!req.body.password) {
        try {
            edituser.password = await bcrypt.hash(req.body.password, 10)
        } catch (error) {
            res.send(error)

        }
    }
    try {
        req.session.user = await Users.findByIdAndUpdate(user._id, edituser)
        res.redirect('/dashboard')
    } catch (error) {
        res.send(error)
    }
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

    upload(req, res, async function(err) {
        if (err) {
            console.log(err);
            return res.status(500).json({ msg: "err" })
        }
        // res.redirect("/dashboard")
        if (user.avatar === './images/avatar/avatar.jpg') {
            try {
                const docs = await Users.findByIdAndUpdate(user._id, { avatar: `./images/avatar/${req.file.filename}` }, { new: true })
                req.session.user = docs;
                return res.redirect('/dashboard')



            } catch (error) {
                console.log(err)

            }

        } else {
            fs.unlinkSync(path.join(__dirname, `../public`, req.session.user.avatar))
            try {
                const docs = await Users.findByIdAndUpdate(user._id, { avatar: `/images/avatar/${req.file.filename}` }, { new: true })
                req.session.user = docs;
                return res.redirect('/dashboard')

            } catch (error) {
                console.log(err)

            }
        }

    })
}

async function reset(req, res) {
    try {
        const hash = await bcrypt.hash(req.body.phone, 10)
        Users.findByIdAndUpdate(req.body._id, { password: hash },
            function(err, docs) {
                if (err) return res.send(err);
                res.redirect("/admin")
            })
    } catch (error) {
        res.send(error)
    }
}

module.exports = { updateUser, deleteUser, uploadAvatar, reset }