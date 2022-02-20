var express = require('express');
var router = express.Router();
const User = require('../models/users')

/* GET users listing. */
router.get('/', function(req, res) {

    User.find({}, (err, users) => {
        if (err) return logger.error(err)
        res.render('admin', { users });

    })
});

module.exports = router;