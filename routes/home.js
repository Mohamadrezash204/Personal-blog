const home = require('express').Router();


/* GET home page. */
// home.get('/home', function(req, res) {
//     res.render('home', { title: 'home', lastName, firstName, avatar, rol, status });

// })

home.get("/", function(req, res) {
    if (req.session.user) {

        if (req.session.user.role == "user") {
            res.render('home', { title: 'home', lastName: req.session.user.lastName, firstName: req.session.user.firstName, avatar: req.session.user.avatar, role: "کاربر", status: "پروفایل ", statuses: "/dashboard" });
        }
        if (req.session.user.role === "admin") {
            res.render('home', { title: 'home', lastName: req.session.user.lastName, firstName: req.session.user.firstName, avatar: req.session.user.avatar, role: "ادمین", status: "کاربرها", statuses: "/admin" });
        }
    } else
        res.render('home', { title: 'home', lastName: "نشده‌اید", firstName: "وارد", avatar: './images/avatar/avatar.jpg', role: "کاربر", status: " ورود", statuses: "/auth/login" });

})


module.exports = home;