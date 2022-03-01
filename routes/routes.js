const routes = require('express').Router();
const home = require('./home')
const blog = require('./blog')
const auth = require('./auth')
const dashboard = require('./dashboard')
const admin = require('./admin')
const { isAdmin, isLoggedIn } = require('../middlewares/auth')


routes.get('/', function(req, res) {
    res.render("index")
})
routes.use("/home", home);
routes.use("/auth", auth);
routes.use("/blog", isLoggedIn, blog);
routes.use("/admin", isLoggedIn, isAdmin, admin);
routes.use('/dashboard', dashboard);


module.exports = routes;