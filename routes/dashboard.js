const router = require("express").Router();
const Users = require("../models/users");
const { isLoggedIn, isAdmin } = require('../middlewares/auth')
const { updateUser, deleteUser, uploadAvatar, reset } = require('../controller/dashboard')


router.get("/", isLoggedIn, function(req, res) {
    res.render("dashboard", { title: "dashboard", user: req.session.user });
})

router.post("/delete", deleteUser)
router.post('/update', updateUser)
router.post('/uploadAvatar', isLoggedIn, uploadAvatar)

router.post('/reset', isLoggedIn, isAdmin, reset)

module.exports = router;