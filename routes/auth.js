const router = require('express').Router();
const { loginpage, login, registerpage, register } = require('../controller/auth')


router.route('/login').get(loginpage).post(login);
router.route('/register').get(registerpage).post(register);

router.get('/logout', function logout(req, res) {
    res.clearCookie('user_seed');
    req.session.destroy();
    res.redirect('/home');
})



module.exports = router;