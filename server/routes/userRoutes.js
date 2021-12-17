const { Router } = require('express');
const userController = require('../controllers/userController');

const router = Router();

router.get('/current', userController.current_user_get);
router.get('/:id', userController.user_get);
router.put('/:id/edit', userController.user_put);

module.exports = router;
