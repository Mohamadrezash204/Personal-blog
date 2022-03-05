var express = require('express');
var router = express.Router();
const User = require('../models/users')

/* GET users listing. */
router.get('/', function(req, res) {
    const data = req.session.nav;
    User.find({}, (err, users) => {
        if (err) return logger.error(err)
        data.users = users;
        res.render('admin', data);

    })
});

module.exports = router;