const { Router } = require('express');
const userController = require('../controllers/userController');
const { verifyLoggedIn, checkEditPermission } = require('../middleware/authMiddleware');

const router = Router();

router.get('/current', verifyLoggedIn, userController.current_user_get);
router.get('/tutors', verifyLoggedIn, userController.tutors_get);
router.get('/:id', verifyLoggedIn, userController.user_get);
router.get('/:id/edit_permission', checkEditPermission, userController.edit_permission_get);
router.put('/:id/edit', checkEditPermission, userController.user_put);

module.exports = router;
