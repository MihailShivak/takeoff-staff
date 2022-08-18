const Router = require('express');
const contactController = require('../controllers/contactController');
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware');
const router = new Router();


router.get('/', contactController.getAll)
router.post('/', checkRoleMiddleware("ADMIN"), contactController.create)

module.exports = router