const router = require("express").Router();
const Users = require("../models/users");
const { isLoggedIn, isAdmin } = require('../middlewares/auth')
const { updateUser, deleteUser, uploadAvatar } = require('../controller/dashboard')


router.get("/", isLoggedIn, function(req, res) {
    res.render("dashboard", { title: "dashboard", user: req.session.user });
})

router.post("/delete", deleteUser)
router.post('/update', updateUser)

router.post('/reset', isAdmin, function(req, res) {
    Users.findByIdAndUpdate(req.body._id, { password: req.body.phone },
        function(err, docs) {
            if (err) return res.send(err);
            res.redirect("/admin")
        })
})
router.post('/uploadAvatar', isLoggedIn, uploadAvatar)

module.exports = router;