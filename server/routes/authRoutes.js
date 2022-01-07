const { Router } = require('express');
const authController = require('../controllers/authController');
const { verifyLoggedIn } = require('../middleware/authMiddleware');

const router = Router();

router.post('/login', authController.login_post);
router.post('/signup', authController.signup_post);
router.get('/logout', authController.logout_get);
router.get('/login_status', verifyLoggedIn, authController.login_status_get);

module.exports = router;
