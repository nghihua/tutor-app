const { Router } = require('express');
const userController = require('../controllers/userController');
const { verifyLoggedIn, verifyProfileOwner } = require('../middleware/authMiddleware');

const router = Router();

router.get('/current', verifyLoggedIn, userController.current_user_get);
router.get('/tutors', verifyLoggedIn, userController.tutors_get);
router.get('/:id', verifyLoggedIn, userController.user_get);
router.put('/:id/edit', verifyProfileOwner, userController.user_put);

module.exports = router;
