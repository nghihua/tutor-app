const { Router } = require('express');
const authController = require('../controllers/authController');

const router = Router();

router.post('/login', authController.login_post);
router.post('/signup', authController.signup_post);
router.get('/logout', authController.logout_get);

module.exports = router;
