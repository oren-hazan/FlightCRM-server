const { Router } = require('express');
const login_ctrl = require('../ctrl/login_ctrl');
const signup_ctrl = require('../ctrl/signup_ctrl');

const router = Router();

router.get('/signup', signup_ctrl.signup_get);
router.post('/signup', signup_ctrl.signup_post);
router.get('/login', login_ctrl.login_get);
router.post('/login', login_ctrl.login_post);
router.get('/logout', login_ctrl.logout_get);

module.exports = router;