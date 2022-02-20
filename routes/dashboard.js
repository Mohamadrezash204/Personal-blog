const router = require("express").Router();
const Users = require("../models/users");
const { isLoggedIn } = require('../middlewares/auth')
const { updateUser, deleteUser } = require('../controller/dashboard')
const generalTools = require("../utils/multerAvatar")
const fs = require('fs')
const path = require('path')

router.get("/", isLoggedIn, function(req, res) {
    res.render("dashboard", { title: "dashboard", user: req.session.user });
})

router.post("/delete", isLoggedIn, deleteUser)
router.post('/update', isLoggedIn, updateUser)

router.get("/uploadAvatar", function(req, res) {
    res.render("avatar")
})
router.post('/uploadAvatar', isLoggedIn, (req, res) => {
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
            const filePath = path.join(__dirname, `../public/${user.avatar}`)
            fs.unlink(filePath)
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

        }

    })

})

module.exports = router;