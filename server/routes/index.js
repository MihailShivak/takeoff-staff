const Router = require('express');
const router = new Router()
const userRouter = require('./userRouter');
const contactRouter = require('./contactRouter');

router.use('/user', userRouter)
router.use('/contacts', contactRouter)

module.exports = router