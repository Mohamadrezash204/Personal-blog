const home = require('express').Router();
const Articles = require('../models/Articles');

home.get("/", function(req, res) {
    if (req.session.user) {
        Articles.findOne({ top: true }, function(err, article) {
            if (err) return res.send(err);

            if (req.session.user.role == "user") {
                res.render('home', { articles: article, title: 'home', lastName: req.session.user.lastName, firstName: req.session.user.firstName, avatar: req.session.user.avatar, role: "کاربر", status: "پروفایل", statuses: "/dashboard" });
            }
            if (req.session.user.role === "admin") {
                res.render('home', { articles: article, title: 'home', lastName: req.session.user.lastName, firstName: req.session.user.firstName, avatar: req.session.user.avatar, role: "ادمین", status: "کاربرها", statuses: "/admin" });
            }
        })
    } else
        res.render('home', { articles: {}, title: 'home', lastName: "نشده‌اید", firstName: "وارد", avatar: './images/avatar/avatar.jpg', role: "کاربر", status: "ورود", statuses: "/auth/login" });

})


module.exports = home;