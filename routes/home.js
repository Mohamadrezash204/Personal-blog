const home = require('express').Router();
const Articles = require('../models/Articles');

home.get("/", async function(req, res) {
    try {
        const article = await Articles.find({ top: true }).sort({ createdAt: 'descending' }).populate('author').lean()
        if (req.session.user) {
            if (req.session.user.role == "user") {
                req.session.nav = { lastName: req.session.user.lastName, firstName: req.session.user.firstName, avatar: req.session.user.avatar, role: "کاربر", status: "پروفایل", statuses: "/dashboard" }
                res.locals.nav = { lastName: req.session.user.lastName, firstName: req.session.user.firstName, avatar: req.session.user.avatar, role: "کاربر", status: "پروفایل", statuses: "/dashboard" }

                res.render('home', { articles: article, title: 'home', lastName: req.session.user.lastName, firstName: req.session.user.firstName, avatar: req.session.user.avatar, role: "کاربر", status: "پروفایل", statuses: "/dashboard" });
            }
            if (req.session.user.role === "admin") {
                req.session.nav = { lastName: req.session.user.lastName, firstName: req.session.user.firstName, avatar: req.session.user.avatar, role: "ادمین", status: "کاربرها", statuses: "/admin" }

                res.render('home', { articles: article, title: 'home', lastName: req.session.user.lastName, firstName: req.session.user.firstName, avatar: req.session.user.avatar, role: "ادمین", status: "کاربرها", statuses: "/admin" });
            }
        } else {
            req.session.nav = { lastName: "نشده‌اید", firstName: "وارد", avatar: '/images/avatar/avatar.jpg', role: "کاربر", status: "ورود", statuses: "/auth/login" }
            res.render('home', { articles: article, title: 'home', lastName: "نشده‌اید", firstName: "وارد", avatar: '/images/avatar/avatar.jpg', role: "کاربر", status: "ورود", statuses: "/auth/login" });

        }
    } catch (error) {
        res.send(error);

    }

})
module.exports = home;